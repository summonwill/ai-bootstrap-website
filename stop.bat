@echo off
echo ========================================
echo AI Bootstrap Systems - Stop Dev Server
echo ========================================
echo.
echo Stopping Next.js development server...
echo.

REM Kill all Node.js processes (this will stop the dev server)
taskkill /F /IM node.exe >nul 2>&1

REM Also kill any npm/yarn/pnpm processes
taskkill /F /IM npm.cmd >nul 2>&1
taskkill /F /IM yarn.cmd >nul 2>&1
taskkill /F /IM pnpm.cmd >nul 2>&1

REM Kill any processes using port 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do (
    taskkill /F /PID %%a >nul 2>&1
)

echo.
echo ✓ Dev server stopped
echo ✓ Port 3000 released
echo.
echo ========================================
pause
