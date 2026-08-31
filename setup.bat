@echo off
REM Keshav's Digital World - Setup & Deployment Script
REM This script will install dependencies and prepare your site for deployment

echo.
echo ================================
echo Keshav's Digital World Setup
echo ================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo Please download and install Node.js from:
    echo https://nodejs.org/ (LTS version)
    echo.
    echo After installation, run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js detected: 
node --version
echo.

REM Navigate to project directory
cd /d "%~dp0"

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ npm install failed
    pause
    exit /b 1
)
echo ✅ Dependencies installed!
echo.

echo Generating audio files...
call npm run generate-audio
if %errorlevel% neq 0 (
    echo ❌ Audio generation failed
    pause
    exit /b 1
)
echo ✅ Audio files generated!
echo.

echo Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Project built successfully!
echo.

echo.
echo ================================
echo Setup Complete! ✨
echo ================================
echo.
echo Your site is ready to deploy!
echo.
echo NEXT STEPS:
echo 1. Create a GitHub account (https://github.com/signup)
echo 2. Create a new repository on GitHub
echo 3. Push your code to GitHub using these commands:
echo.
echo    git init
echo    git add .
echo    git commit -m "Initial commit - Keshav's Digital World"
echo    git remote add origin https://github.com/YOUR_USERNAME/keshav-world.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 4. Go to https://vercel.com
echo 5. Sign up and import your GitHub repository
echo 6. Vercel will automatically deploy your site!
echo.
echo For more details, see DEPLOYMENT.md
echo.
pause
