<?php
// CSRF Token Generator
// Security: Restrict CORS to your domain only
$allowed_origin = 'https://herobots.net';
$allowed_hosts = ['herobots.net', 'www.herobots.net'];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';

// Check if request is from same origin (no Origin header = same-origin request)
// Same-origin requests don't send Origin header, so we check the Host header instead
$is_same_origin = empty($origin) && in_array($host, $allowed_hosts);

// Allow requests from:
// 1. Same origin (no Origin header + allowed host)
// 2. Allowed origin header
// 3. Localhost for development
if (
    $is_same_origin ||
    $origin === $allowed_origin ||
    $origin === 'http://localhost:5173' ||
    $origin === 'http://localhost:3000'
) {
    // Set CORS header only if Origin is present (for cross-origin requests)
    if (!empty($origin)) {
        header("Access-Control-Allow-Origin: $origin");
    }
    // For same-origin requests, no CORS header needed (browser allows by default)
} else {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Forbidden']);
    exit();
}

header('Access-Control-Allow-Methods: GET, OPTIONS');
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

// Only accept GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Start session for CSRF token storage
session_start();

// Generate CSRF token if it doesn't exist or regenerate every 30 minutes for security
$token_lifetime = 1800; // 30 minutes
if (
    !isset($_SESSION['csrf_token']) || !isset($_SESSION['csrf_token_time']) ||
    (time() - $_SESSION['csrf_token_time']) > $token_lifetime
) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32)); // 64 character hex string
    $_SESSION['csrf_token_time'] = time();
}

// Return the token
http_response_code(200);
echo json_encode([
    'success' => true,
    'token' => $_SESSION['csrf_token']
]);
