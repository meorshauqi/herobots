# 🚀 HeroBots Website - cPanel Deployment Guide

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. **Project Status Check**
- ✅ Build compiles successfully
- ✅ No hardcoded localhost URLs
- ✅ Contact forms use relative paths (`/send-email.php`)
- ✅ All routes configured correctly
- ✅ React Router setup complete
- ✅ All images optimized and loading
- ✅ PHP email handler ready

### 2. **Required Files & Configuration**

#### Files Ready for Upload:
```
dist/
├── index.html          (Main entry point)
├── assets/             (All CSS, JS, and images)
├── send-email.php      (Contact form handler)
└── vite.svg           (Favicon)
```

---

## 📋 STEP-BY-STEP DEPLOYMENT PROCESS

### STEP 1: Build Your Project
```bash
npm run build
```
✅ **Status**: Already completed - `dist` folder created successfully

---

### STEP 2: Create .htaccess File for React Router

You MUST create a `.htaccess` file in your `dist` folder to handle React Router routes properly.

**Create this file manually:**

File: `dist/.htaccess`
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  
  # Rewrite everything else to index.html
  RewriteRule . /index.html [L]
</IfModule>

# Enable CORS for PHP (if needed)
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
  Header set Access-Control-Allow-Methods "POST, GET, OPTIONS"
  Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### STEP 3: Update index.html (Optional - Better SEO)

Update `dist/index.html` meta tags for better SEO:

```html
<head>
  <!-- ... existing tags ... -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>HeroBots - AI & Robotics Solutions | Smart Security Systems</title>
  <meta name="description" content="HeroBots provides cutting-edge AI, robotics, and security solutions including License Plate Recognition, Visitor Management, and Smart Patrolling systems." />
  <meta name="keywords" content="AI, robotics, security systems, LPR, VMS, smart patrolling, Malaysia" />
  <meta name="author" content="HeroBots" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://herobots.net/" />
  <meta property="og:title" content="HeroBots - AI & Robotics Solutions" />
  <meta property="og:description" content="Cutting-edge AI, robotics, and security solutions" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/assets/logo-DlZed0Vm.png" />
  
  <!-- ... rest of head ... -->
</head>
```

---

### STEP 4: cPanel Upload Process

#### Option A: File Manager (Recommended for first deployment)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel
   - Login with your credentials

2. **Navigate to public_html**
   - Click on "File Manager"
   - Navigate to `public_html` folder (or your domain's root folder)

3. **Clean the directory** (if needed)
   - Delete default files (index.html, cgi-bin, etc.)
   - Keep .htaccess if you have custom rules

4. **Upload dist folder contents**
   - Click "Upload" button
   - Upload ALL files from your `dist` folder
   - **IMPORTANT**: Upload the CONTENTS of dist, not the dist folder itself
   - Make sure to include the `.htaccess` file you created

5. **Set Permissions**
   - Select `send-email.php`
   - Click "Permissions" or "Change Permissions"
   - Set to `644` (Owner: Read+Write, Group: Read, World: Read)

#### Option B: FTP/SFTP (For regular updates)

Use FileZilla or similar FTP client:
```
Host: ftp.herobots.net (or your domain)
Username: Your cPanel username
Password: Your cPanel password
Port: 21 (FTP) or 22 (SFTP)
```

Upload all `dist` folder contents to `public_html`

---

### STEP 5: Configure Email Settings (IMPORTANT!)

Your PHP mail() function needs to be configured in cPanel:

1. **Go to Email Accounts** in cPanel
2. **Verify `info@herobots.net` exists**
   - If not, create it
   - Set a strong password

3. **Check PHP Mail Settings**
   - Go to "Select PHP Version" or "MultiPHP Manager"
   - Ensure your domain uses PHP 7.4 or higher
   - Check if mail() function is enabled

4. **Test Email Sending**
   - Some hosts block mail() function
   - If emails don't work, you may need to use SMTP instead

---

### STEP 6: Post-Deployment Testing

After upload, test these critical features:

#### ✅ Navigation & Routes
- [ ] Home page loads (/)
- [ ] Services page (/services)
- [ ] Products page (/products)
- [ ] About page (/about)
- [ ] Contact page (/contact)
- [ ] Direct URL access works (not just clicking links)
- [ ] Browser back/forward buttons work

#### ✅ Contact Forms
- [ ] Footer contact form sends emails
- [ ] Contact page form sends emails
- [ ] Form validation works
- [ ] Success/error messages display
- [ ] Emails arrive at info@herobots.net

#### ✅ Visual & Performance
- [ ] All images load correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive design
- [ ] Loading screen appears on home page
- [ ] Gradient effects display properly

#### ✅ SEO & Social
- [ ] Page title shows correctly
- [ ] Favicon displays
- [ ] Meta descriptions present
- [ ] Social sharing works

---

## 🔧 COMMON ISSUES & SOLUTIONS

### Issue 1: "404 Not Found" on Page Refresh
**Problem**: Refreshing `/services` shows 404
**Solution**: Ensure `.htaccess` file is uploaded and mod_rewrite is enabled

### Issue 2: Contact Form Not Sending Emails
**Solutions**:
1. Check PHP error logs in cPanel
2. Verify info@herobots.net exists
3. Check spam folder
4. Contact hosting support to enable mail() function
5. Alternative: Use SMTP instead of mail()

### Issue 3: Images Not Loading
**Problem**: Broken image links
**Solution**: Clear browser cache, ensure all files uploaded correctly

### Issue 4: Blank White Page
**Problem**: JavaScript errors
**Solution**: 
- Check browser console for errors
- Ensure all assets uploaded
- Verify file permissions

### Issue 5: CSS Not Loading / Styling Broken
**Problem**: Styles not applied
**Solution**:
- Clear browser cache
- Check if CSS file uploaded to assets folder
- Verify .htaccess allows CSS files

---

## 📱 TESTING CHECKLIST

### Desktop Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile Testing
- [ ] iPhone Safari
- [ ] Android Chrome
- [ ] Tablet view

### Performance Testing
- [ ] Use Google PageSpeed Insights
- [ ] Check loading times
- [ ] Test on slow 3G connection

---

## 🎯 OPTIMIZATION TIPS (Optional but Recommended)

### 1. **Image Optimization**
Your current images are quite large (up to 3MB). Consider:
- Compressing PNG files
- Converting large PNGs to WebP format
- Using lazy loading for off-screen images

### 2. **Enable Cloudflare** (Free CDN)
- Speed up your website globally
- Get free SSL certificate
- DDoS protection

### 3. **Setup Google Analytics**
Add tracking to monitor visitors

---

## 📞 SUPPORT CONTACTS

### If Something Goes Wrong:

1. **Hosting Support**
   - Contact your cPanel hosting provider
   - Ask about: PHP mail(), mod_rewrite, file permissions

2. **DNS Issues**
   - Check domain nameservers point to hosting
   - Allow 24-48 hours for DNS propagation

3. **Email Issues**
   - Check cPanel Email Deliverability section
   - Verify SPF and DKIM records

---

## ✅ FINAL DEPLOYMENT CHECKLIST

Before going live:

- [ ] Run `npm run build`
- [ ] Create `.htaccess` file in dist folder
- [ ] Update `index.html` meta tags (optional but recommended)
- [ ] Upload all dist contents to public_html via cPanel File Manager
- [ ] Set send-email.php permissions to 644
- [ ] Verify info@herobots.net email exists
- [ ] Test all pages and routes
- [ ] Test both contact forms
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Clear browser cache and test again

---

## 🎉 YOU'RE READY TO GO LIVE!

Once all checks pass, your website will be live at:
**https://herobots.net**

Good luck! 🚀

---

**Last Updated**: December 15, 2025
**Project**: HeroBots Website
**Technology Stack**: React + Vite + TailwindCSS + PHP

