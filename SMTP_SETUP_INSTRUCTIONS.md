# SMTP Setup Instructions for info@herobots.net

## Quick Setup Guide

### Step 1: Get Your Email Password

You need the password for `info@herobots.net`:

1. In cPanel, go to **Email Accounts**
2. Find `info@herobots.net`
3. Click **"Change Password"** or **"Update"**
4. Either:
   - Use the existing password (if you know it)
   - Or set a new password and remember it

### Step 2: Find SMTP Settings

**Look for one of these in cPanel:**

1. **"Connect Devices"** button next to the email
2. **"Configure Mail Client"** option
3. **"Email Client Configuration"** in the search bar
4. **"More"** or **"..."** menu next to the email

**Common cPanel SMTP Settings:**

- **SMTP Server:** `mail.herobots.net` (most common)
- **Port:** `587` (TLS) or `465` (SSL)
- **Username:** `info@herobots.net`
- **Password:** Your email password

### Step 3: Update send-email-smtp.php

1. **Download PHPMailer:**

   - Go to: https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip
   - Extract the ZIP
   - Upload the `PHPMailer` folder to `public/PHPMailer/`

2. **Update the password in `send-email-smtp.php`:**

   - Open `public/send-email-smtp.php`
   - Find line 197: `$mail->Password = getenv('SMTP_PASS') ?: 'YOUR_EMAIL_PASSWORD';`
   - Replace `YOUR_EMAIL_PASSWORD` with your actual email password

3. **Test:**
   - Rename `send-email.php` to `send-email-backup.php` (backup)
   - Rename `send-email-smtp.php` to `send-email.php`
   - Test the contact form

### Step 4: If Port 587 Doesn't Work

If you get connection errors, try port 465 (SSL):

In `send-email.php`, change these lines:

```php
// Change from:
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

// To:
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;
```

## Quick Test

After setup:

1. Submit the contact form
2. Check `info@herobots.net` inbox
3. Check error logs if it doesn't work

## Need Help?

If you can't find SMTP settings, contact your hosting provider and ask:

> "I need SMTP settings for info@herobots.net to send emails from my website. What are the SMTP server, port, and authentication details?"



