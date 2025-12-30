<?php
// Security: Restrict CORS to your domain only
// Replace 'https://herobots.net' with your actual domain
$allowed_origin = 'https://herobots.net';
$allowed_hosts = ['herobots.net', 'www.herobots.net'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';

// Remove port from host if present (e.g., "herobots.net:443" -> "herobots.net")
$host_without_port = preg_replace('/:\d+$/', '', $host);

// Check if request is from same origin
// For POST requests, browsers may send Origin header even for same-origin
$is_same_origin = false;
if (empty($origin)) {
    // No Origin header = same-origin request
    $is_same_origin = in_array($host_without_port, $allowed_hosts);
} else {
    // Check if Origin matches allowed origin or host
    $parsed_origin = parse_url($origin);
    $origin_host = isset($parsed_origin['host']) ? $parsed_origin['host'] : '';
    $is_same_origin = ($origin === $allowed_origin) || in_array($origin_host, $allowed_hosts);
}

// Allow requests from:
// 1. Same origin (matching host or origin)
// 2. Allowed origin header
// 3. Localhost for development
if (
    $is_same_origin ||
    $origin === $allowed_origin ||
    $origin === 'http://localhost:5173' ||
    $origin === 'http://localhost:3000'
) {
    // Set CORS header for all allowed requests
    if (!empty($origin)) {
        header("Access-Control-Allow-Origin: $origin");
    } elseif ($is_same_origin) {
        // For same-origin requests without Origin, set based on current request
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        header("Access-Control-Allow-Origin: $protocol://$host_without_port");
    }
} else {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Forbidden']);
    exit();
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Start session for CSRF token validation and rate limiting
session_start();

// Rate limiting: Simple IP-based rate limiting
// In production, use Redis or a proper rate limiting library
$ip = $_SERVER['REMOTE_ADDR'];
$rate_limit_file = sys_get_temp_dir() . '/herobots_rate_limit_' . md5($ip) . '.txt';
$rate_limit_window = 300; // 5 minutes
$max_requests = 5; // Max 5 requests per 5 minutes

if (file_exists($rate_limit_file)) {
    $rate_data = json_decode(file_get_contents($rate_limit_file), true);
    $current_time = time();

    // Reset if window expired
    if ($current_time - $rate_data['first_request'] > $rate_limit_window) {
        $rate_data = ['count' => 0, 'first_request' => $current_time];
    }

    // Check rate limit
    if ($rate_data['count'] >= $max_requests) {
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
        exit();
    }

    $rate_data['count']++;
} else {
    $rate_data = ['count' => 1, 'first_request' => time()];
}

file_put_contents($rate_limit_file, json_encode($rate_data));

// Limit request body size (max 50KB)
$max_body_size = 50 * 1024;
$content_length = isset($_SERVER['CONTENT_LENGTH']) ? (int)$_SERVER['CONTENT_LENGTH'] : 0;
if ($content_length > $max_body_size) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'Request too large']);
    exit();
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate JSON
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit();
}

// CSRF Token Validation (must be done after JSON parsing)
if (
    !isset($data['csrf_token']) || !isset($_SESSION['csrf_token']) ||
    $data['csrf_token'] !== $_SESSION['csrf_token']
) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid security token. Please refresh the page and try again.']);
    exit();
}

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit();
}

// Input length validation
$max_lengths = [
    'name' => 100,
    'email' => 255,
    'phone' => 20,
    'subject' => 200,
    'message' => 5000
];

foreach ($max_lengths as $field => $max_len) {
    if (isset($data[$field]) && strlen($data[$field]) > $max_len) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Field '$field' exceeds maximum length of $max_len characters"]);
        exit();
    }
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags(trim($data['name'])), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags(trim($data['phone'])), ENT_QUOTES, 'UTF-8') : 'Not provided';
$subject = isset($data['subject']) ? htmlspecialchars(strip_tags(trim($data['subject'])), ENT_QUOTES, 'UTF-8') : 'New Contact Form Submission';
$message = htmlspecialchars(strip_tags(trim($data['message'])), ENT_QUOTES, 'UTF-8');

// Validate email format and length
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Email configuration - Use environment variable if available, otherwise fallback
$to = getenv('CONTACT_EMAIL') ?: 'info@herobots.net';

// Validate recipient email
if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
    error_log("ERROR: Invalid recipient email address: $to");
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email configuration error. Please contact the administrator.'
    ]);
    exit();
}

$email_subject = 'HeroBots Contact Form: ' . $subject;

// Create email body
$email_body = "New contact form submission from HeroBots website\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: $phone\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";
$email_body .= "\n---\n";
$email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

// Secure email headers - Use fixed sender to prevent header injection
// The user's email is only in the body, not in headers
$headers = "From: noreply@herobots.net\r\n";
$headers .= "Reply-To: $email\r\n"; // Safe because we validated it
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Priority: 1\r\n"; // High priority
$headers .= "Importance: High\r\n";

// Log email attempt
error_log("Attempting to send contact form email to: $to from: $email");

// Send email
// Note: mail() may return true even if email isn't actually sent
// This is a known limitation of PHP's mail() function
$mail_sent = @mail($to, $email_subject, $email_body, $headers);

// Get any errors that occurred
$error = error_get_last();
$error_message = $error ? $error['message'] : '';

if ($mail_sent) {
    // Log success (but note that mail() returning true doesn't guarantee delivery)
    error_log("SUCCESS: Contact form email sent to: $to from: $email");
    error_log("Email subject: $email_subject");
    error_log("Note: mail() returned true, but email delivery is not guaranteed");

    // Check if there were any warnings/errors despite mail() returning true
    if ($error_message && stripos($error_message, 'mail') !== false) {
        error_log("WARNING: Error detected despite mail() returning true: $error_message");
    }

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);
} else {
    // Log detailed error
    error_log("FAILED: Contact form email failed to send to: $to from: $email");
    error_log("Email subject: $email_subject");
    if ($error_message) {
        error_log("Error details: $error_message");
    }
    error_log("PHP mail() returned: false");
    error_log("Check server mail configuration (sendmail/postfix/SMTP)");

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.'
    ]);
}
