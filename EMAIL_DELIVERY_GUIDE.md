# Email Delivery Guide - Ensuring Contact Form Emails Reach info@herobots.net

## ✅ Current Configuration

Your contact form is configured to send emails to: **`info@herobots.net`**

The email is sent using PHP's `mail()` function with these settings:

- **To:** `info@herobots.net`
- **From:** `noreply@herobots.net`
- **Reply-To:** User's email address
- **Subject:** "HeroBots Contact Form: [user's subject]"

---

## 🔍 How to Verify Emails Are Being Sent

### 1. **Check Server Error Logs**

The script now logs all email attempts. Check your server's error log:

```bash
# Common locations:
/var/log/apache2/error.log
/var/log/php_errors.log
/home/username/logs/error.log
```

Look for entries like:

```
SUCCESS: Contact form email sent to: info@herobots.net from: user@example.com
```

Or errors:

```
FAILED: Contact form email failed to send to: info@herobots.net from: user@example.com
```

### 2. **Test the Form**

1. Fill out the contact form on your website
2. Submit it
3. Check if you receive the email at `info@herobots.net`
4. Check spam/junk folder if not in inbox

### 3. **Check Email Server Configuration**

PHP's `mail()` function requires proper server configuration:

#### On Linux/Unix Servers:

- **Sendmail** or **Postfix** must be installed and configured
- Check if mail service is running: `systemctl status postfix` or `systemctl status sendmail`

#### On Windows Servers:

- **SMTP** must be configured in `php.ini`
- Check `php.ini` for SMTP settings

---

## ⚠️ Common Issues & Solutions

### Issue 1: Emails Go to Spam

**Why:**

- Missing SPF/DKIM records
- Server IP not trusted
- Generic "From" address

**Solutions:**

1. **Add SPF Record** to your DNS:

   ```
   TXT record: v=spf1 include:_spf.google.com ~all
   ```

2. **Add DKIM Record** (if using email service)

3. **Use a proper email address** instead of `noreply@herobots.net`:
   ```php
   $headers = "From: info@herobots.net\r\n";
   ```

### Issue 2: PHP mail() Not Working

**Symptoms:**

- Form shows success but no email received
- Error logs show "mail() failed"

**Solutions:**

#### Option A: Use SMTP (Recommended)

Replace PHP's `mail()` with SMTP library like PHPMailer:

```php
// Install via Composer: composer require phpmailer/phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.herobots.net'; // Your SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'info@herobots.net';
$mail->Password = 'your-password';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->setFrom('noreply@herobots.net', 'HeroBots');
$mail->addAddress('info@herobots.net');
$mail->addReplyTo($email, $name);

$mail->Subject = $email_subject;
$mail->Body = $email_body;

$mail->send();
```

#### Option B: Configure PHP mail() in php.ini

```ini
[mail function]
SMTP = smtp.herobots.net
smtp_port = 587
sendmail_from = noreply@herobots.net
```

### Issue 3: Emails Not Reaching Inbox

**Check:**

1. ✅ Email address is correct: `info@herobots.net`
2. ✅ Email account exists and is active
3. ✅ Check spam/junk folder
4. ✅ Check email server logs
5. ✅ Verify DNS MX records for `herobots.net`

---

## 🧪 Testing Email Delivery

### Test Script

Create `test-email.php` in your `public` folder:

```php
<?php
$to = 'info@herobots.net';
$subject = 'Test Email from HeroBots';
$message = 'This is a test email to verify email delivery.';
$headers = "From: noreply@herobots.net\r\n";
$headers .= "Reply-To: test@example.com\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "✅ Test email sent successfully to $to";
} else {
    echo "❌ Failed to send test email. Check server configuration.";
}
?>
```

Visit: `https://herobots.net/test-email.php`

**⚠️ Delete this file after testing for security!**

---

## 📧 Recommended: Use SMTP Instead of mail()

### Why SMTP is Better:

| Feature            | PHP mail()                  | SMTP (PHPMailer)   |
| ------------------ | --------------------------- | ------------------ |
| **Reliability**    | ⚠️ Depends on server config | ✅ More reliable   |
| **Delivery Rate**  | ⚠️ Often goes to spam       | ✅ Better delivery |
| **Error Handling** | ⚠️ Limited                  | ✅ Detailed errors |
| **Authentication** | ⚠️ Basic                    | ✅ Full SMTP auth  |
| **TLS/SSL**        | ⚠️ Limited support          | ✅ Full support    |

### Popular SMTP Services:

1. **SendGrid** (Free tier: 100 emails/day)
2. **Mailgun** (Free tier: 5,000 emails/month)
3. **Amazon SES** (Very cheap, pay per email)
4. **Your hosting provider's SMTP** (Usually included)

---

## 🔧 Quick Fixes

### Fix 1: Change "From" Address

If emails are going to spam, change the From address:

```php
// In send-email.php, line 186:
$headers = "From: info@herobots.net\r\n"; // Instead of noreply@
```

### Fix 2: Add Email Validation

Already done! ✅ The script validates:

- Email format
- Email length (max 255 chars)
- Required fields

### Fix 3: Add Email Logging

Already done! ✅ The script now logs:

- All email attempts
- Success/failure status
- Error details

---

## 📋 Checklist to Ensure Email Delivery

- [ ] **Email address is correct:** `info@herobots.net`
- [ ] **Email account exists** and is active
- [ ] **Test the form** - submit a test message
- [ ] **Check spam folder** - emails might be filtered
- [ ] **Check server error logs** - look for email errors
- [ ] **Verify PHP mail() works** - test with test-email.php
- [ ] **Check DNS records** - SPF, DKIM if needed
- [ ] **Consider SMTP** - more reliable than mail()
- [ ] **Monitor email delivery** - check logs regularly

---

## 🚀 Next Steps

1. **Test the form now** - Submit a test message
2. **Check your inbox** - Look in inbox and spam
3. **Check error logs** - Verify no errors
4. **If emails don't arrive:**
   - Check spam folder
   - Verify email account is active
   - Consider switching to SMTP
   - Contact your hosting provider

---

## 📞 Need Help?

If emails still don't arrive:

1. **Check server error logs** for detailed errors
2. **Contact your hosting provider** - they can check mail server
3. **Consider using SMTP service** - more reliable
4. **Test with test-email.php** - isolate the issue

---

## ✅ Summary

Your contact form is configured to send to `info@herobots.net`.

**To ensure delivery:**

1. ✅ Test the form
2. ✅ Check spam folder
3. ✅ Monitor error logs
4. ✅ Consider SMTP if mail() doesn't work
5. ✅ Verify email account is active

The script now includes better error logging to help diagnose any issues! 🎉
