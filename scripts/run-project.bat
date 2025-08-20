@echo off
setlocal enabledelayedexpansion

REM Cross-Chain Lending Protocol - Project Runner Script (Windows)
REM This script sets up and runs the entire project including all packages, dependencies, and services

echo ================================
echo   Cross-Chain Lending Protocol
echo   Project Runner Script
echo ================================
echo.

REM Check if command line argument is provided
if "%1"=="" (
    set COMMAND=start
) else (
    set COMMAND=%1
)

REM Check prerequisites
echo [INFO] Checking prerequisites...

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)
for /f "tokens=1,2 delims=." %%a in ('node --version') do set NODE_VERSION=%%a
set NODE_VERSION=!NODE_VERSION:~1!
if !NODE_VERSION! LSS 18 (
    echo [ERROR] Node.js version 18+ is required. Current version: 
    node --version
    exit /b 1
)
echo [SUCCESS] Node.js version: 
node --version

REM Check pnpm
pnpm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] pnpm is not installed. Installing pnpm...
    npm install -g pnpm
)
echo [SUCCESS] pnpm version: 
pnpm --version

REM Check Docker
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not installed. Please install Docker first.
    exit /b 1
)
echo [SUCCESS] Docker version: 
docker --version

REM Check Docker Compose
docker-compose --version >nul 2>&1
if errorlevel 1 (
    docker compose version >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Docker Compose is not installed. Please install Docker Compose first.
        exit /b 1
    )
)
echo [SUCCESS] Docker Compose is available

REM Check if Docker daemon is running
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker daemon is not running. Please start Docker first.
    exit /b 1
)
echo [SUCCESS] Docker daemon is running

REM Setup environment
echo [INFO] Setting up environment...

REM Create .env files if they don't exist
if not exist "apps\api\.env" (
    echo [WARNING] Creating apps\api\.env file...
    (
        echo # Database
        echo DATABASE_URL="postgresql://postgres:password123@localhost:5432/crosschain_ops"
        echo.
        echo # Redis
        echo REDIS_URL="redis://localhost:6379"
        echo REDIS_PORT=6379
        echo.
        echo # Server
        echo PORT=3000
        echo NODE_ENV=development
        echo.
        echo # CORS
        echo CORS_ORIGINS="http://localhost:3001,http://localhost:3000"
        echo.
        echo # Rate Limiting
        echo RATE_LIMIT_TTL=60
        echo RATE_LIMIT_MAX=100
        echo.
        echo # Configuration Files
        echo CHAINS_CONFIG_PATH="../../config/chains.json"
        echo CONTRACTS_CONFIG_PATH="../../config/contracts.json"
        echo.
        echo # Relayer Configuration
        echo RELAYER_PRIVATE_KEY="0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
        echo ROUTER_ADDRESS="0x18326944A2a6701C7b1c6C3976E012cCee65A4bF"
    ) > "apps\api\.env"
    echo [SUCCESS] Created apps\api\.env
)

if not exist "apps\worker\.env" (
    echo [WARNING] Creating apps\worker\.env file...
    (
        echo # Database
        echo DATABASE_URL="postgresql://postgres:password123@localhost:5432/crosschain_ops"
        echo.
        echo # Redis
        echo REDIS_URL="redis://localhost:6379"
        echo REDIS_PORT=6379
        echo.
        echo # Configuration Files
        echo CHAINS_CONFIG_PATH="../../config/chains.json"
        echo CONTRACTS_CONFIG_PATH="../../config/contracts.json"
        echo.
        echo # API Configuration
        echo API_URL="http://localhost:3000"
    ) > "apps\worker\.env"
    echo [SUCCESS] Created apps\worker\.env
)

if not exist "apps\web\.env.local" (
    echo [WARNING] Creating apps\web\.env.local file...
    (
        echo # API Configuration
        echo NEXT_PUBLIC_API_URL=http://localhost:3000
        echo.
        echo # WalletConnect (optional)
        echo NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-walletconnect-project-id
    ) > "apps\web\.env.local"
    echo [SUCCESS] Created apps\web\.env.local
)

REM Load environment variables from .env files for docker-compose
echo [INFO] Loading environment variables from .env files...

REM Load API .env file
if exist "apps\api\.env" (
    for /f "tokens=1,2 delims==" %%a in (apps\api\.env) do (
        if not "%%a"=="" if not "%%a:~0,1%"=="#" (
            set "%%a=%%b"
        )
    )
    echo [SUCCESS] Loaded apps\api\.env
)

REM Load worker .env file
if exist "apps\worker\.env" (
    for /f "tokens=1,2 delims==" %%a in (apps\worker\.env) do (
        if not "%%a"=="" if not "%%a:~0,1%"=="#" (
            set "%%a=%%b"
        )
    )
    echo [SUCCESS] Loaded apps\worker\.env
)

REM Load web .env file
if exist "apps\web\.env.local" (
    for /f "tokens=1,2 delims==" %%a in (apps\web\.env.local) do (
        if not "%%a"=="" if not "%%a:~0,1%"=="#" (
            set "%%a=%%b"
        )
    )
    echo [SUCCESS] Loaded apps\web\.env.local
)

REM Install dependencies
echo [INFO] Installing project dependencies...
pnpm install
echo [SUCCESS] All dependencies installed

REM Main command logic
if "%COMMAND%"=="start" (
    echo [INFO] Starting services...
    
    REM Start infrastructure services
    echo [INFO] Starting infrastructure services...
    docker-compose up -d postgres redis
    
    REM Wait for services to be healthy
    echo [INFO] Waiting for services to be healthy...
    timeout /t 10 /nobreak >nul
    
    REM Setup database
    echo [INFO] Setting up database...
    echo [INFO] Waiting for PostgreSQL to be ready...
    :wait_postgres
    docker exec crosschain-postgres pg_isready -U postgres >nul 2>&1
    if errorlevel 1 (
        timeout /t 2 /nobreak >nul
        goto wait_postgres
    )
    echo [SUCCESS] PostgreSQL is ready
    
    REM Generate Prisma client
    echo [INFO] Generating Prisma client...
    pnpm -F prisma generate
    
    REM Run database migrations
    echo [INFO] Running database migrations...
    pnpm -F prisma migrate dev
    
    REM Build all packages
    echo [INFO] Building all packages...
    pnpm build
    
    REM Start API service
    echo [INFO] Starting API service...
    docker-compose up -d api
    
    REM Wait for API to be ready
    echo [INFO] Waiting for API to be ready...
    timeout /t 15 /nobreak >nul
    
    REM Start worker service
    echo [INFO] Starting worker service...
    docker-compose up -d worker
    
    REM Start web service
    echo [INFO] Starting web service...
    docker-compose up -d web
    
    echo [SUCCESS] All services started
    
    REM Show status
    call :show_status
    
) else if "%COMMAND%"=="stop" (
    echo [INFO] Stopping all services...
    docker-compose down -v
    echo [SUCCESS] All services stopped
    
) else if "%COMMAND%"=="restart" (
    echo [INFO] Restarting all services...
    docker-compose down -v
    timeout /t 5 /nobreak >nul
    call :start_services
    call :show_status
    
) else if "%COMMAND%"=="rebuild" (
    echo [INFO] Rebuilding all services...
    docker-compose down
    docker-compose up --build -d
    echo [SUCCESS] Services rebuilt and started
    call :show_status
    
) else if "%COMMAND%"=="status" (
    call :show_status
    
) else if "%COMMAND%"=="setup" (
    echo [SUCCESS] Setup complete
    
) else if "%COMMAND%"=="help" (
    echo Usage: %0 [command]
    echo.
    echo Commands:
    echo   start     - Start all services (default)
    echo   stop      - Stop all services
    echo   restart   - Restart all services
    echo   rebuild   - Rebuild and start all services
    echo   status    - Show current status
    echo   setup     - Setup environment and dependencies only
    echo   help      - Show this help message
    echo.
    echo Examples:
    echo   %0                    # Start all services
    echo   %0 rebuild           # Rebuild all services
    echo   %0 status            # Show current status
    
) else (
    echo [ERROR] Unknown command: %COMMAND%
    echo Use '%0 help' for usage information
    exit /b 1
)

exit /b 0

:show_status
echo [INFO] Project status:
echo.
docker-compose ps
echo.
echo [INFO] Service URLs:
echo   - API: http://localhost:3000
echo   - Web: http://localhost:3001
echo   - PostgreSQL: localhost:5432
echo   - Redis: localhost:6379
echo.
echo [INFO] Useful commands:
echo   - View logs: docker-compose logs -f [service_name]
echo   - Stop services: docker-compose down
echo   - Restart services: docker-compose restart
echo   - Rebuild: docker-compose up --build -d
goto :eof

:start_services
echo [INFO] Starting services...
docker-compose up -d postgres redis
timeout /t 10 /nobreak >nul
call :setup_database
pnpm build
docker-compose up -d api
timeout /t 15 /nobreak >nul
docker-compose up -d worker
docker-compose up -d web
echo [SUCCESS] All services started
goto :eof

:setup_database
echo [INFO] Setting up database...
:wait_postgres_loop
docker exec crosschain-postgres pg_isready -U postgres >nul 2>&1
if errorlevel 1 (
    timeout /t 2 /nobreak >nul
    goto wait_postgres_loop
)
echo [SUCCESS] PostgreSQL is ready
pnpm -F prisma generate
pnpm -F prisma migrate dev
echo [SUCCESS] Database setup complete
goto :eof
