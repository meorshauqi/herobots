# PHPMailer Setup Instructions

## Quick Setup (Recommended)

Since PHP's `mail()` isn't working, we'll use PHPMailer with SMTP.

### Option 1: Download PHPMailer Manually

1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer/releases
2. Extract the ZIP file
3. Upload the `PHPMailer` folder to your `public` directory
4. The folder structure should be:
   ```
   public/
   ├── PHPMailer/
   │   ├── PHPMailer.php
   │   ├── SMTP.php
   │   └── Exception.php
   ├── send-email.php
   └── ...
   ```

### Option 2: Use Composer (if available on server)

```bash
cd public
composer require phpmailer/phpmailer
```

## SMTP Configuration

You'll need SMTP credentials. Get them from:

1. **Your hosting provider** (cPanel Email Accounts)
2. **Free SMTP service** (SendGrid, Mailgun, etc.)

### Common SMTP Settings:

**cPanel/Shared Hosting:**

- SMTP Host: `mail.herobots.net` or `smtp.herobots.net`
- SMTP Port: `587` (TLS) or `465` (SSL)
- Username: `info@herobots.net`
- Password: Your email account password

**SendGrid (Free):**

- SMTP Host: `smtp.sendgrid.net`
- SMTP Port: `587`
- Username: `apikey`
- Password: Your SendGrid API key

**Mailgun (Free):**

- SMTP Host: `smtp.mailgun.org`
- SMTP Port: `587`
- Username: Your Mailgun SMTP username
- Password: Your Mailgun SMTP password

## Next Steps

After downloading PHPMailer, I'll update `send-email.php` to use SMTP instead of `mail()`.



