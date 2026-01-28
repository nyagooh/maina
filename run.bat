@echo off
REM Ann Maina Portfolio - Run Script for Windows
REM Simple script to manage the portfolio application

:menu
cls
echo ========================================
echo    Ann Maina Portfolio - Run Script
echo ========================================
echo.
echo Select an option:
echo.
echo   1) Start Development Server
echo   2) Build for Production
echo   3) Start Production Server
echo   4) Install Dependencies
echo   5) Run Linter
echo   6) Clean Build Cache
echo   7) Exit
echo.
set /p choice="Enter your choice [1-7]: "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto start
if "%choice%"=="4" goto install
if "%choice%"=="5" goto lint
if "%choice%"=="6" goto clean
if "%choice%"=="7" goto exit
goto invalid

:dev
echo.
echo Starting development server...
npm run dev
goto end

:build
echo.
echo Building for production...
npm run build
goto end

:start
echo.
echo Starting production server...
echo Make sure you've built the project first (option 2)
npm start
goto end

:install
echo.
echo Installing dependencies...
npm install
goto end

:lint
echo.
echo Running linter...
npm run lint
goto end

:clean
echo.
echo Cleaning build cache...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Cache cleaned successfully!
pause
goto menu

:invalid
echo.
echo Invalid option. Please try again.
pause
goto menu

:exit
echo.
echo Goodbye!
exit

:end
echo.
pause
goto menu
