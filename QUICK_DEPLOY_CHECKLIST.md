# 🚀 Quick Deployment Checklist

## Before Upload

- [x] Run `npm run build` ✅ (Already done!)
- [x] `.htaccess` file created in `dist/` folder ✅
- [x] `index.html` updated with SEO meta tags ✅
- [x] PHP email handler ready ✅

## What to Upload to cPanel

Upload ALL files from the `dist` folder to your `public_html` directory:

```
✅ index.html
✅ .htaccess (IMPORTANT!)
✅ send-email.php
✅ assets/ folder (with all files inside)
✅ vite.svg
```

## cPanel Steps (Simple Version)

1. **Login** to your cPanel
2. Open **File Manager**
3. Go to `public_html` folder
4. **Delete** old files (if any)
5. **Upload** all contents from your `dist` folder
6. Set `send-email.php` permissions to **644**
7. **Done!** Visit your website

## Required Email Setup

1. Go to **Email Accounts** in cPanel
2. Make sure `info@herobots.net` exists
3. If not, create it with a strong password

## After Upload - Test These

- [ ] Visit https://herobots.net/
- [ ] Click all menu items (Home, Services, Products, About, Contact)
- [ ] Refresh page on `/services` (should NOT show 404)
- [ ] Test contact form in footer
- [ ] Test contact form on Contact page
- [ ] Check email arrives at info@herobots.net
- [ ] Test on mobile phone
- [ ] Check images load properly

## If Something Doesn't Work

### 404 Error on page refresh?
→ `.htaccess` file missing or mod_rewrite disabled
→ Contact hosting support to enable mod_rewrite

### Contact form not sending emails?
→ Check if `info@herobots.net` email exists
→ Check spam folder
→ Contact hosting support about PHP mail() function

### Images not loading?
→ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
→ Make sure all files from `assets/` folder uploaded

### White blank page?
→ Check browser console (F12) for errors
→ Make sure all files uploaded correctly

## Your Files Are Ready! 

Everything is prepared in the `dist` folder. Just upload and go live! 🎉

---

**Need detailed instructions?** See `DEPLOYMENT_GUIDE.md`

