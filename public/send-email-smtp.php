<?php
/**
 * SMTP Version of send-email.php
 * This uses PHPMailer for reliable email delivery via SMTP
 * 
 * SETUP REQUIRED:
 * 1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer/releases
 * 2. Extract and upload PHPMailer folder to public/ directory
 * 3. Configure SMTP settings below
 */

// Security: Restrict CORS to your domain only
$allowed_origin = 'https://herobots.net';
$allowed_hosts = ['herobots.net', 'www.herobots.net'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';

$host_without_port = preg_replace('/:\d+$/', '', $host);

$is_same_origin = false;
if (empty($origin)) {
    $is_same_origin = in_array($host_without_port, $allowed_hosts);
} else {
    $parsed_origin = parse_url($origin);
    $origin_host = isset($parsed_origin['host']) ? $parsed_origin['host'] : '';
    $is_same_origin = ($origin === $allowed_origin) || in_array($origin_host, $allowed_hosts);
}

if (
    $is_same_origin ||
    $origin === $allowed_origin ||
    $origin === 'http://localhost:5173' ||
    $origin === 'http://localhost:3000'
) {
    if (!empty($origin)) {
        header("Access-Control-Allow-Origin: $origin");
    } elseif ($is_same_origin) {
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

header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

session_start();

// Rate limiting
$ip = $_SERVER['REMOTE_ADDR'];
$rate_limit_file = sys_get_temp_dir() . '/herobots_rate_limit_' . md5($ip) . '.txt';
$rate_limit_window = 300;
$max_requests = 5;

if (file_exists($rate_limit_file)) {
    $rate_data = json_decode(file_get_contents($rate_limit_file), true);
    $current_time = time();
    if ($current_time - $rate_data['first_request'] > $rate_limit_window) {
        $rate_data = ['count' => 0, 'first_request' => $current_time];
    }
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

$max_body_size = 50 * 1024;
$content_length = isset($_SERVER['CONTENT_LENGTH']) ? (int)$_SERVER['CONTENT_LENGTH'] : 0;
if ($content_length > $max_body_size) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'Request too large']);
    exit();
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit();
}

if (
    !isset($data['csrf_token']) || !isset($_SESSION['csrf_token']) ||
    $data['csrf_token'] !== $_SESSION['csrf_token']
) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid security token. Please refresh the page and try again.']);
    exit();
}

if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit();
}

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

$name = htmlspecialchars(strip_tags(trim($data['name'])), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags(trim($data['phone'])), ENT_QUOTES, 'UTF-8') : 'Not provided';
$subject = isset($data['subject']) ? htmlspecialchars(strip_tags(trim($data['subject'])), ENT_QUOTES, 'UTF-8') : 'New Contact Form Submission';
$message = htmlspecialchars(strip_tags(trim($data['message'])), ENT_QUOTES, 'UTF-8');

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 255) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

$to = getenv('CONTACT_EMAIL') ?: 'info@herobots.net';

if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
    error_log("ERROR: Invalid recipient email address: $to");
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email configuration error. Please contact the administrator.'
    ]);
    exit();
}

// ============================================
// PHPMailer Configuration
// ============================================

// Check if PHPMailer is available
$phpmailer_path = __DIR__ . '/PHPMailer/src/PHPMailer.php';
if (!file_exists($phpmailer_path)) {
    // Fallback: Try alternative path
    $phpmailer_path = __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
}

if (file_exists($phpmailer_path)) {
    require_once $phpmailer_path;
    require_once dirname($phpmailer_path) . '/SMTP.php';
    require_once dirname($phpmailer_path) . '/Exception.php';
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    $mail = new PHPMailer(true);
    
    try {
        // SMTP Configuration
        // Common cPanel SMTP settings - UPDATE THE PASSWORD BELOW!
        $mail->isSMTP();
        
        // Try common cPanel SMTP servers (in order of likelihood)
        $smtp_host = getenv('SMTP_HOST') ?: 'mail.herobots.net'; // Most common
        // Alternatives: 'smtp.herobots.net', 'herobots.net'
        
        $mail->Host = $smtp_host;
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USER') ?: 'info@herobots.net';
        
        // ⚠️ IMPORTANT: Replace 'YOUR_EMAIL_PASSWORD' with your actual email password!
        // Get this from: cPanel > Email Accounts > info@herobots.net > Change Password (or check current password)
        $mail->Password = getenv('SMTP_PASS') ?: 'YOUR_EMAIL_PASSWORD';
        
        // Try TLS first (port 587) - most common
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = getenv('SMTP_PORT') ?: 587;
        
        // Enable debugging (set to 0 in production after testing)
        $mail->SMTPDebug = 0; // 0 = off, 1 = client messages, 2 = client and server messages
        
        // If port 587 doesn't work, try SSL (port 465) by uncommenting these lines:
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        // $mail->Port = 465;
        
        // Email settings
        $mail->setFrom('noreply@herobots.net', 'HeroBots Contact Form');
        $mail->addAddress($to, 'HeroBots');
        $mail->addReplyTo($email, $name);
        
        $email_subject = 'HeroBots Contact Form: ' . $subject;
        $email_body = "New contact form submission from HeroBots website\n\n";
        $email_body .= "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Phone: $phone\n";
        $email_body .= "Subject: $subject\n\n";
        $email_body .= "Message:\n$message\n";
        $email_body .= "\n---\n";
        $email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
        $email_body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
        
        $mail->Subject = $email_subject;
        $mail->Body = $email_body;
        $mail->isHTML(false);
        
        $mail->send();
        
        error_log("SUCCESS (SMTP): Contact form email sent to: $to from: $email");
        error_log("Email subject: $email_subject");
        
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! We will get back to you soon.'
        ]);
        
    } catch (Exception $e) {
        error_log("FAILED (SMTP): Contact form email failed to send to: $to from: $email");
        error_log("SMTP Error: " . $mail->ErrorInfo);
        error_log("Exception: " . $e->getMessage());
        
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send email. Please try again later.'
        ]);
    }
} else {
    // PHPMailer not found - fallback to mail()
    error_log("WARNING: PHPMailer not found, falling back to mail()");
    
    $email_subject = 'HeroBots Contact Form: ' . $subject;
    $email_body = "New contact form submission from HeroBots website\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message\n";
    $email_body .= "\n---\n";
    $email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    $email_body .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";
    
    $headers = "From: noreply@herobots.net\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    $mail_sent = @mail($to, $email_subject, $email_body, $headers);
    
    if ($mail_sent) {
        error_log("SUCCESS (mail()): Contact form email sent to: $to from: $email");
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message! We will get back to you soon.'
        ]);
    } else {
        error_log("FAILED (mail()): Contact form email failed to send");
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send email. Please try again later.'
        ]);
    }
}



