# 📦 cPanel Deployment - What to Zip

## Step-by-Step Process

### Step 1: Build Your Project First! ⚠️ IMPORTANT

**You MUST build the project before zipping!**

```bash
npm run build
```

This creates the `dist` folder with all optimized files.

---

### Step 2: What to Zip

**Zip the CONTENTS of the `dist` folder** (not the `dist` folder itself)

After running `npm run build`, your `dist` folder should contain:

```
dist/
├── index.html              ✅
├── .htaccess              ✅ (from public/.htaccess)
├── send-email.php         ✅ (from public/)
├── get-csrf-token.php     ✅ (from public/)
├── assets/                ✅ (all CSS, JS, images)
│   ├── index-*.js
│   ├── index-*.css
│   └── ...
└── vite.svg              ✅ (if exists)
```

---

### Step 3: How to Zip (Windows PowerShell)

**Option A: Zip the dist folder contents**

```powershell
# Navigate to project root
cd C:\Users\user\Documents\herobots

# Build first (if not done)
npm run build

# Navigate to dist folder
cd dist

# Zip all contents
Compress-Archive -Path * -DestinationPath ..\herobots-deploy.zip -Force
```

**Option B: Zip from project root**

```powershell
# Navigate to project root
cd C:\Users\user\Documents\herobots

# Build first
npm run build

# Zip dist folder contents
Compress-Archive -Path dist\* -DestinationPath herobots-deploy.zip -Force
```

---

### Step 4: What Gets Uploaded to cPanel

Upload the ZIP file to cPanel, then extract it in `public_html`:

**Files that should be in public_html:**

- ✅ `index.html`
- ✅ `.htaccess` (IMPORTANT for React Router!)
- ✅ `send-email.php`
- ✅ `get-csrf-token.php`
- ✅ `assets/` folder (with all files)
- ✅ `vite.svg` (if exists)

**DO NOT upload:**

- ❌ `node_modules/`
- ❌ `src/` folder
- ❌ `public/` folder (only its contents go to dist)
- ❌ `package.json`
- ❌ Any `.md` files

---

### Step 5: Quick Checklist

Before zipping, make sure:

- [ ] ✅ Ran `npm run build` successfully
- [ ] ✅ `dist` folder exists
- [ ] ✅ `dist/.htaccess` file exists (copied from `public/.htaccess`)
- [ ] ✅ `dist/send-email.php` exists
- [ ] ✅ `dist/get-csrf-token.php` exists
- [ ] ✅ `dist/assets/` folder exists with files
- [ ] ✅ `dist/index.html` exists

---

### Step 6: After Uploading to cPanel

1. **Extract the ZIP** in `public_html`
2. **Set permissions:**
   - `send-email.php` → 644
   - `get-csrf-token.php` → 644
   - `.htaccess` → 644
3. **Test the website:**
   - Visit `https://herobots.net`
   - Test all pages
   - Test contact forms

---

## 🎯 Summary

**What to zip:** Contents of the `dist` folder (after running `npm run build`)

**Command:**

```powershell
cd C:\Users\user\Documents\herobots
npm run build
Compress-Archive -Path dist\* -DestinationPath herobots-deploy.zip -Force
```

**Upload:** `herobots-deploy.zip` to cPanel `public_html` and extract it.

---

## ⚠️ Important Notes

1. **Always build first** - Don't zip the `src` folder, zip the built `dist` folder
2. **Include .htaccess** - This is critical for React Router to work
3. **Include PHP files** - `send-email.php` and `get-csrf-token.php` must be included
4. **Test after upload** - Make sure all routes work (no 404 errors)
