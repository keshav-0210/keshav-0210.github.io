#!/bin/bash

# Keshav's Digital World - Setup & Deployment Script
# Run this script to prepare your site for deployment

echo ""
echo "================================"
echo "Keshav's Digital World Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "Please download and install Node.js from:"
    echo "https://nodejs.org/ (LTS version)"
    echo ""
    echo "After installation, run this script again."
    exit 1
fi

echo "✅ Node.js detected:"
node --version
echo ""

# Navigate to script directory
cd "$(dirname "$0")"

echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi
echo "✅ Dependencies installed!"
echo ""

echo "Generating audio files..."
npm run generate-audio
if [ $? -ne 0 ]; then
    echo "❌ Audio generation failed"
    exit 1
fi
echo "✅ Audio files generated!"
echo ""

echo "Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Project built successfully!"
echo ""

echo ""
echo "================================"
echo "Setup Complete! ✨"
echo "================================"
echo ""
echo "Your site is ready to deploy!"
echo ""
echo "NEXT STEPS:"
echo "1. Create a GitHub account (https://github.com/signup)"
echo "2. Create a new repository on GitHub"
echo "3. Push your code to GitHub using these commands:"
echo ""
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit - Keshav's Digital World'"
echo "   git remote add origin https://github.com/YOUR_USERNAME/keshav-world.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Go to https://vercel.com"
echo "5. Sign up and import your GitHub repository"
echo "6. Vercel will automatically deploy your site!"
echo ""
echo "For more details, see DEPLOYMENT.md"
echo ""
