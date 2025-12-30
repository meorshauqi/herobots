<?php

/**
 * Email Test Script
 * Use this to test if PHP mail() function is working on your server
 * 
 * WARNING: Delete this file after testing for security!
 */

// Security: Only allow from localhost or your IP
$allowed_ips = ['127.0.0.1', '::1']; // Add your IP if needed
$client_ip = $_SERVER['REMOTE_ADDR'] ?? '';

// Uncomment the line below and add your IP to test from browser
// if (!in_array($client_ip, $allowed_ips) && $client_ip !== 'YOUR_IP_HERE') {
//     die('Access denied. This script should only be run from server or your IP.');
// }

header('Content-Type: text/html; charset=UTF-8');
?>
<!DOCTYPE html>
<html>

<head>
    <title>Email Test - HeroBots</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }

        .success {
            color: green;
            background: #d4edda;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
        }

        .error {
            color: red;
            background: #f8d7da;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
        }

        .info {
            color: blue;
            background: #d1ecf1;
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
        }

        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>

<body>
    <h1>Email Configuration Test</h1>

    <?php
    echo "<div class='info'><strong>Server Information:</strong><br>";
    echo "PHP Version: " . phpversion() . "<br>";
    echo "Server: " . ($_SERVER['SERVER_SOFTWARE'] ?? 'Unknown') . "<br>";
    echo "Server IP: " . ($_SERVER['SERVER_ADDR'] ?? 'Unknown') . "<br>";
    echo "Your IP: " . $client_ip . "<br>";
    echo "</div>";

    // Check if mail() function exists
    if (!function_exists('mail')) {
        echo "<div class='error'><strong>ERROR:</strong> PHP mail() function is not available on this server.</div>";
        exit;
    }

    // Check php.ini mail settings
    echo "<div class='info'><strong>PHP Mail Configuration:</strong><br>";
    echo "SMTP: " . (ini_get('SMTP') ?: 'Not set') . "<br>";
    echo "smtp_port: " . (ini_get('smtp_port') ?: 'Not set') . "<br>";
    echo "sendmail_path: " . (ini_get('sendmail_path') ?: 'Not set') . "<br>";
    echo "</div>";

    // Test email sending
    if (isset($_GET['test'])) {
        $to = 'info@herobots.net';
        $subject = 'Test Email from HeroBots Server - ' . date('Y-m-d H:i:s');
        $message = "This is a test email to verify that PHP mail() function is working.\n\n";
        $message .= "Server: " . ($_SERVER['SERVER_NAME'] ?? 'Unknown') . "\n";
        $message .= "Time: " . date('Y-m-d H:i:s') . "\n";
        $message .= "PHP Version: " . phpversion() . "\n";

        $headers = "From: noreply@herobots.net\r\n";
        $headers .= "Reply-To: noreply@herobots.net\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        echo "<div class='info'><strong>Attempting to send test email...</strong><br>";
        echo "To: $to<br>";
        echo "Subject: $subject<br>";
        echo "</div>";

        // Try to send email
        $result = @mail($to, $subject, $message, $headers);

        if ($result) {
            echo "<div class='success'><strong>SUCCESS:</strong> PHP mail() returned TRUE.<br>";
            echo "However, this doesn't guarantee the email was actually sent or delivered.<br>";
            echo "Please check your inbox at <strong>info@herobots.net</strong> (and spam folder).</div>";

            // Log the attempt
            error_log("TEST EMAIL: Sent test email to $to at " . date('Y-m-d H:i:s'));
        } else {
            echo "<div class='error'><strong>FAILED:</strong> PHP mail() returned FALSE.<br>";
            echo "The email could not be sent. Check server error logs for details.</div>";

            $error = error_get_last();
            if ($error) {
                echo "<div class='error'><strong>Last Error:</strong><br>";
                echo "<pre>" . print_r($error, true) . "</pre></div>";
            }

            error_log("TEST EMAIL FAILED: Could not send to $to at " . date('Y-m-d H:i:s'));
        }

        echo "<div class='info'><strong>Next Steps:</strong><br>";
        echo "1. Check your inbox at <strong>info@herobots.net</strong><br>";
        echo "2. Check spam/junk folder<br>";
        echo "3. Check server error logs: " . ini_get('error_log') . "<br>";
        echo "4. If email doesn't arrive, contact your hosting provider about mail server configuration.</div>";
    } else {
        echo "<div class='info'>";
        echo "<strong>Ready to test email sending.</strong><br><br>";
        echo "<a href='?test=1' style='background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;'>Click here to send test email</a>";
        echo "</div>";
    }

    // Show recent error log entries related to email
    $error_log = ini_get('error_log');
    if ($error_log && file_exists($error_log)) {
        echo "<div class='info'><strong>Recent Email-Related Log Entries:</strong><br>";
        $lines = file($error_log);
        $email_lines = array_filter($lines, function ($line) {
            return stripos($line, 'email') !== false ||
                stripos($line, 'mail') !== false ||
                stripos($line, 'contact form') !== false;
        });
        $recent = array_slice($email_lines, -10);
        if (!empty($recent)) {
            echo "<pre>" . htmlspecialchars(implode('', $recent)) . "</pre>";
        } else {
            echo "No email-related entries found in error log.";
        }
        echo "</div>";
    }
    ?>

    <hr>
    <p><small><strong>Security Note:</strong> Delete this file after testing!</small></p>
</body>

</html>


