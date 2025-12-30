# How to Find SMTP Settings in cPanel

## Step-by-Step Guide

### Method 1: From Email Accounts Page

1. **In the Email Accounts section**, look for `info@herobots.net`
2. **Click on the email address** or look for one of these buttons:

   - **"Connect Devices"**
   - **"Configure Mail Client"**
   - **"Check Email"** (then look for settings)
   - **"More"** or **"..."** (three dots menu)

3. **Look for "Mail Client Manual Settings"** or **"Email Client Configuration"**

4. You should see:
   - **Incoming Server:** `mail.herobots.net` or `imap.herobots.net`
   - **Outgoing Server (SMTP):** `mail.herobots.net` or `smtp.herobots.net`
   - **Port:** Usually `587` (TLS) or `465` (SSL)
   - **Username:** `info@herobots.net`
   - **Password:** (your email password)

### Method 2: Check Email Client Configuration

1. In cPanel, search for **"Email Client Configuration"** or **"Email Accounts"**
2. Click on **"Connect Devices"** next to `info@herobots.net`
3. Look for **"Manual Settings"** or **"Mail Client Manual Settings"**
4. Find the **SMTP** section

### Method 3: Common cPanel SMTP Settings

If you can't find the settings, try these common defaults:

**For most cPanel hosts:**

- **SMTP Host:** `mail.herobots.net`
- **SMTP Port:** `587` (TLS) or `465` (SSL)
- **Username:** `info@herobots.net`
- **Password:** Your email account password
- **Encryption:** TLS (for port 587) or SSL (for port 465)

### Method 4: Contact Your Hosting Provider

If you can't find the settings, contact your hosting provider and ask:

> "I need the SMTP settings for info@herobots.net to configure email sending from my website. Please provide:
>
> - SMTP server address
> - SMTP port
> - Username
> - Password
> - Encryption type (TLS/SSL)"

## Quick Alternative: Test Common Settings

While you're looking, I can create a version that tries common SMTP settings automatically. Would you like me to do that?

## What You Need

Once you find the settings, you'll need:

- ✅ SMTP Server (e.g., `mail.herobots.net`)
- ✅ SMTP Port (usually `587` or `465`)
- ✅ Username (`info@herobots.net`)
- ✅ Password (your email password)

Then I'll update the `send-email.php` file with these settings!



