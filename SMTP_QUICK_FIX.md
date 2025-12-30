# Quick Fix: Switch to SMTP for Email Delivery

## The Problem

PHP's `mail()` function returns `true` but emails aren't being delivered. This is because your server's mail service isn't properly configured.

## The Solution

Switch to SMTP (Simple Mail Transfer Protocol) which is more reliable.

## Step 1: Get SMTP Credentials

### Option A: From Your Hosting Provider (cPanel)

1. Log into cPanel
2. Go to **Email Accounts**
3. Find or create `info@herobots.net`
4. Click **Connect Devices** or **Configure Mail Client**
5. Note down:
   - **SMTP Server:** Usually `mail.herobots.net` or `smtp.herobots.net`
   - **SMTP Port:** Usually `587` (TLS) or `465` (SSL)
   - **Username:** `info@herobots.net`
   - **Password:** Your email account password

### Option B: Use Free SMTP Service

**SendGrid (Recommended - Free 100 emails/day):**

1. Sign up at https://sendgrid.com
2. Create API Key
3. Use these settings:
   - SMTP Host: `smtp.sendgrid.net`
   - Port: `587`
   - Username: `apikey`
   - Password: Your API key

## Step 2: Choose Your Solution

### Solution 1: Use PHPMailer (Recommended)

- More reliable
- Better error handling
- Industry standard

**Setup:**

1. Download PHPMailer: https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip
2. Extract and upload `PHPMailer` folder to `public/PHPMailer/`
3. Rename `send-email-smtp.php` to `send-email.php` (backup old one first!)
4. Update SMTP settings in the file

### Solution 2: Contact Your Hosting Provider

Ask them to:

1. Enable PHP `mail()` function properly
2. Configure mail server
3. Or provide SMTP credentials

## Step 3: Update Configuration

After getting SMTP credentials, update the file with your settings:

```php
$mail->Host = 'mail.herobots.net'; // Your SMTP server
$mail->Username = 'info@herobots.net'; // Your email
$mail->Password = 'YOUR_PASSWORD'; // Your password
$mail->Port = 587; // Usually 587 or 465
```

## Quick Test

After setup, test the form again. Emails should now arrive reliably!



