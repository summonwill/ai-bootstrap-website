@echo off
echo ========================================
echo AI Bootstrap Systems - Dev Server
echo ========================================
echo.
echo Starting Next.js development server...
echo Server will open at http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Open browser after 3 seconds delay
start /B timeout /t 3 /nobreak > nul && start http://localhost:3000

REM Start the Next.js dev server
npm run dev

REM If npm run dev fails, try alternative commands
if errorlevel 1 (
    echo.
    echo npm run dev failed, trying yarn...
    yarn dev
)

if errorlevel 1 (
    echo.
    echo yarn dev failed, trying pnpm...
    pnpm dev
)
