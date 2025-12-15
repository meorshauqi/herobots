# 📦 ZIP File Cheat Sheet - Terminal Commands

## 🎯 Basic ZIP Command Structure

```bash
zip [options] output.zip files_or_folders
```

---

## 📚 Common Commands You'll Use

### 1️⃣ Zip a Single Folder
```bash
cd /path/to/folder
zip -r foldername.zip foldername/
```
**Example:**
```bash
cd /Users/shauqi/Documents/herobots/dist
zip -r assets.zip assets/
```

### 2️⃣ Zip Multiple Folders
```bash
zip -r output.zip folder1/ folder2/ folder3/
```
**Example:**
```bash
zip -r website.zip assets/ public/
```

### 3️⃣ Zip Individual Files
```bash
zip output.zip file1.txt file2.html file3.css
```
**Example:**
```bash
zip files.zip index.html send-email.php .htaccess
```

### 4️⃣ Zip Everything in Current Directory
```bash
zip -r everything.zip .
```
The `.` means "current directory"

### 5️⃣ Zip Entire Project
```bash
cd /Users/shauqi/Documents/herobots
zip -r herobots-backup.zip .
```

---

## 🔧 Important Options

### `-r` = Recursive (Include Subfolders)
```bash
zip -r assets.zip assets/
```
**Always use this for folders!**

### `-v` = Verbose (Show Details)
```bash
zip -rv assets.zip assets/
```
Shows each file as it's being zipped

### `-q` = Quiet (No Output)
```bash
zip -rq assets.zip assets/
```
Zips silently without showing progress

### `-9` = Maximum Compression
```bash
zip -r9 assets.zip assets/
```
Smallest file size (slower)

### `-1` = Fast Compression
```bash
zip -r1 assets.zip assets/
```
Faster but larger file

### `-x` = Exclude Files
```bash
zip -r assets.zip assets/ -x "*.DS_Store" -x "*node_modules*"
```
Excludes .DS_Store and node_modules

---

## 🎓 Real-World Examples

### Example 1: Backup Your Project
```bash
cd /Users/shauqi/Documents
zip -r herobots-backup-$(date +%Y%m%d).zip herobots/
```
Creates: `herobots-backup-20251215.zip`

### Example 2: Zip for Upload to cPanel
```bash
cd /Users/shauqi/Documents/herobots/dist
zip -r website-deploy.zip .
```
Zips everything ready for deployment

### Example 3: Zip Without Hidden Files
```bash
zip -r clean-assets.zip assets/ -x "*/.*" -x ".*"
```
Excludes all hidden files (like .DS_Store)

### Example 4: Zip Multiple Specific Files
```bash
cd /Users/shauqi/Documents/herobots/dist
zip deployment.zip index.html send-email.php .htaccess
zip -ru deployment.zip assets/
```
Creates zip with specific files, then adds assets folder

---

## 🔍 Checking ZIP Contents

### List Files in ZIP (Without Extracting)
```bash
unzip -l assets.zip
```

### Test ZIP File Integrity
```bash
unzip -t assets.zip
```

### Get ZIP File Info
```bash
zipinfo assets.zip
```

---

## 📤 Unzipping Files

### Extract ZIP File
```bash
unzip assets.zip
```

### Extract to Specific Folder
```bash
unzip assets.zip -d /path/to/destination/
```

### Extract Without Overwriting
```bash
unzip -n assets.zip
```

### Extract Quietly
```bash
unzip -q assets.zip
```

---

## 💪 Pro Tips

### 1. Always Use Full Paths
```bash
zip -r /Users/shauqi/Desktop/backup.zip /Users/shauqi/Documents/herobots/
```

### 2. Check File Size Before/After
```bash
# Before
du -sh assets/

# Create ZIP
zip -r assets.zip assets/

# After
ls -lh assets.zip
```

### 3. Create ZIP with Date Stamp
```bash
zip -r backup-$(date +%Y%m%d-%H%M%S).zip folder/
```
Creates: `backup-20251215-220300.zip`

### 4. Update Existing ZIP
```bash
zip -u assets.zip assets/new-file.png
```
Only adds new/modified files

### 5. Delete Files from ZIP
```bash
zip -d assets.zip "assets/old-file.png"
```

---

## 🚀 Quick Reference

| Command | What It Does |
|---------|-------------|
| `zip -r output.zip folder/` | Zip a folder |
| `zip output.zip file.txt` | Zip a file |
| `zip -rv output.zip folder/` | Zip with details |
| `zip -r9 output.zip folder/` | Maximum compression |
| `zip -rq output.zip folder/` | Quiet mode |
| `zip -r output.zip folder/ -x "*.DS_Store"` | Exclude files |
| `unzip file.zip` | Extract ZIP |
| `unzip -l file.zip` | List contents |

---

## 🎯 Your Common Tasks

### For cPanel Upload:
```bash
# 1. Navigate to dist folder
cd /Users/shauqi/Documents/herobots/dist

# 2. Create assets zip
zip -r assets.zip assets/

# 3. Or zip entire site
zip -r website.zip .

# 4. Check size
ls -lh *.zip
```

### For Backup:
```bash
# Full project backup with date
cd /Users/shauqi/Documents
zip -r herobots-backup-$(date +%Y%m%d).zip herobots/ -x "*node_modules*" -x "*.git*"
```

### For Quick File Transfer:
```bash
# Zip multiple files quickly
cd /path/to/files
zip transfer.zip *.html *.css *.js
```

---

## 🆘 Common Issues & Solutions

### Issue: "zip: not found"
**Solution:** ZIP is built into macOS. If missing, install via Homebrew:
```bash
brew install zip
```

### Issue: ZIP Too Large
**Solution:** Use maximum compression:
```bash
zip -r9 output.zip folder/
```

### Issue: Permission Denied
**Solution:** Use sudo (carefully):
```bash
sudo zip -r output.zip folder/
```

### Issue: Forgot to Use -r
**Result:** Empty ZIP or only top-level files
**Solution:** Always use `-r` for folders!

---

## 📝 Summary

**Most Common Command You'll Use:**
```bash
cd /path/to/folder
zip -r output.zip foldername/
```

**Remember:**
- `-r` = Include everything in folder
- Always navigate to the right directory first
- Check the result with `ls -lh output.zip`

---

**Created:** December 15, 2025  
**For:** HeroBots Project Deployment

