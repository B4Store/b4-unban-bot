@echo off
:: Check if Node.js is installed
node -v >nul 2>&1
IF ERRORLEVEL 1 (
    echo Node.js is not installed. Please install Node.js first.
    pause
    exit /b
)

:: Install npm packages
echo Installing npm packages...
npm install

:: Install discord.js
echo Installing discord.js...
npm install discord.js

echo Installation completed.
pause
