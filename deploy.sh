#!/bin/bash
# Herobots Deployment Script (macOS)
# Run from project root: bash deploy.sh

set -e

echo "🔨 Building project..."
npm run build

echo "📦 Creating deployment zip (including hidden files)..."
cd dist

# Remove old zip if exists
rm -f ../herobots-deploy.zip

# zip with . as source ensures hidden files (.htaccess) are included
# -x excludes macOS metadata junk
zip -r ../herobots-deploy.zip . \
  -x "*.DS_Store" \
  -x "__MACOSX/*" \
  -x "Archive.zip" \
  -x "*.md"

cd ..

echo ""
echo "✅ Done! herobots-deploy.zip is ready."
echo ""
echo "📋 Contents of zip:"
zip -sf herobots-deploy.zip | head -20
echo ""
echo "👉 Next steps:"
echo "   1. Upload herobots-deploy.zip to cPanel File Manager → public_html"
echo "   2. Extract it (overwrite existing files)"
echo "   3. Verify .htaccess is present: cPanel → File Manager → Show Hidden Files"
echo "   4. Test: https://herobots.net/privacy-policy"
