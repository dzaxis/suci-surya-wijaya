@echo off
title CV Suci Surya Wijaya - Auto Run
cd /d "%~dp0"

echo ============================================================
echo  CV. Suci Surya Wijaya - Auto Run (Backend + Frontend)
echo ============================================================
echo.

REM --- 1. Cek Node.js & npm ---
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js tidak ditemukan! Install Node.js 18+ dulu.
  echo Download: https://nodejs.org/
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm tidak ditemukan! Install ulang Node.js.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('node -v') do echo [OK] Node %%v terdeteksi.

REM --- 2. Setup .env otomatis jika belum ada ---
if not exist "backend\.env" (
  echo [SETUP] backend\.env belum ada, copy dari .env.example...
  copy /y "backend\.env.example" "backend\.env" >nul
) else (
  echo [OK] backend\.env sudah ada.
)
if not exist "website-perusahaan\.env" (
  echo [SETUP] website-perusahaan\.env belum ada, copy dari .env.example...
  copy /y "website-perusahaan\.env.example" "website-perusahaan\.env" >nul
) else (
  echo [OK] website-perusahaan\.env sudah ada.
)
echo.

REM --- 3. Install dependencies backend jika belum ada ---
if not exist "backend\node_modules" (
  echo [INSTALL] Install dependencies backend...
  echo           npm install --legacy-peer-deps
  cd /d "%~dp0backend"
  call npm install --legacy-peer-deps
  if errorlevel 1 (
    echo [ERROR] Gagal install backend!
    pause
    exit /b 1
  )
  cd /d "%~dp0"
) else (
  echo [OK] backend\node_modules sudah ada - skip install.
)

REM --- 4. Install dependencies frontend jika belum ada ---
if not exist "website-perusahaan\node_modules" (
  echo [INSTALL] Install dependencies frontend...
  echo           npm install
  cd /d "%~dp0website-perusahaan"
  call npm install
  if errorlevel 1 (
    echo [ERROR] Gagal install frontend!
    pause
    exit /b 1
  )
  cd /d "%~dp0"
) else (
  echo [OK] website-perusahaan\node_modules sudah ada - skip install.
)
echo.

REM --- 5. Prisma generate (opsional, jangan gagalkan jika MySQL belum ada) ---
echo [SETUP] Prisma generate backend (skip error jika DB belum tersedia)...
cd /d "%~dp0backend"
call npx prisma generate >nul 2>&1
if errorlevel 1 (
  echo [WARN] prisma generate gagal - backend tetap jalan mode in-memory mock.
) else (
  echo [OK] prisma generate berhasil.
)
cd /d "%~dp0"
echo.

REM --- 6. Jalankan Backend + Frontend di window terpisah ---
echo [RUN] Menjalankan Backend (http://localhost:3001/api)...
start "Backend :3001 - CV Suci Surya Wijaya" /d "%~dp0backend" cmd /k "npm run start:dev"

echo [RUN] Menunggu backend siap 5 detik...
timeout /t 5 /nobreak >nul

echo [RUN] Menjalankan Frontend (http://localhost:3000)...
start "Frontend :3000 - CV Suci Surya Wijaya" /d "%~dp0website-perusahaan" cmd /k "npm run dev"

echo.
echo ============================================================
echo  SEMUA BERJALAN!
echo  - Frontend : http://localhost:3000
echo  - Backend  : http://localhost:3001/api
echo  - Admin    : http://localhost:3000/admin
echo  - Login    : admin@sucisuryawijaya.co.id / admin123
echo ============================================================
echo  Tutup window "Backend" dan "Frontend" untuk stop server.
echo  Atau jalankan stop.bat (jika ada).
echo ============================================================
echo.

REM --- 7. Buka browser otomatis ---
choice /c YN /m "Buka browser otomatis?" /t 10 /d Y >nul
if errorlevel 2 goto :nobrowser
if errorlevel 1 start "" "http://localhost:3000"
:nobrowser

pause
