# Project Runner Scripts

This directory contains scripts to easily run the entire Cross-Chain Lending Protocol project.

## 🚀 Quick Start

### On macOS/Linux:
```bash
# Make script executable (first time only)
chmod +x scripts/run-project.sh

# Start all services
./scripts/run-project.sh

# Or with specific command
./scripts/run-project.sh start
```

### On Windows:
```cmd
# Start all services
scripts\run-project.bat

# Or with specific command
scripts\run-project.bat start
```

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `start` | Start all services (default) |
| `stop` | Stop all services |
| `restart` | Restart all services |
| `rebuild` | Rebuild and start all services |
| `status` | Show current status |
| `setup` | Setup environment and dependencies only |
| `help` | Show help message |

## 🔧 What the Scripts Do

### Prerequisites Check
- ✅ Node.js 18+
- ✅ pnpm package manager
- ✅ Docker & Docker Compose
- ✅ Docker daemon running

### Environment Setup
- 🔧 Creates `.env` files for all services
- 🔧 Sets up database connection strings
- 🔧 Configures relayer settings
- 🔧 Sets up API endpoints

### Dependencies & Build
- 📦 Installs all workspace dependencies
- 🔨 Generates Prisma client
- 🏗️ Builds all packages
- 🗄️ Runs database migrations

### Service Management
- 🐘 Starts PostgreSQL database
- 🔴 Starts Redis cache
- 🌐 Starts API service
- ⚙️ Starts worker service
- 🖥️ Starts web frontend

## 🌐 Service URLs

After running the script, you can access:

- **Frontend DApp**: http://localhost:3001
- **API Service**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## 📝 Examples

### Start everything:
```bash
./scripts/run-project.sh
```

### Check status:
```bash
./scripts/run-project.sh status
```

### Rebuild after changes:
```bash
./scripts/run-project.sh rebuild
```

### Stop all services:
```bash
./scripts/run-project.sh stop
```

### View logs:
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f api
docker-compose logs -f worker
docker-compose logs -f web
```

## ⚠️ Important Notes

1. **First Run**: The script will create `.env` files with default values. Update these with your actual configuration.

2. **Relayer Private Key**: Update the `RELAYER_PRIVATE_KEY` in `apps/api/.env` with a real private key for production.

3. **Database**: The script will create and migrate the database automatically.

4. **Dependencies**: All packages (contracts, prisma, shared-types) are built automatically.

5. **Ports**: Make sure ports 3000, 3001, 5432, and 6379 are available.

## 🆘 Troubleshooting

### Common Issues:

**Docker not running:**
```bash
# Start Docker Desktop or Docker daemon
sudo systemctl start docker  # Linux
```

**Port already in use:**
```bash
# Check what's using the port
lsof -i :3000
# Kill the process or change ports in docker-compose.yml
```

**Database connection issues:**
```bash
# Check if PostgreSQL is running
docker-compose ps postgres
# View logs
docker-compose logs postgres
```

**Build failures:**
```bash
# Clean and rebuild
./scripts/run-project.sh rebuild
# Or manually
pnpm clean && pnpm install && pnpm build
```

## 🔄 Development Workflow

1. **Start services**: `./scripts/run-project.sh start`
2. **Make changes** to your code
3. **Rebuild**: `./scripts/run-project.sh rebuild`
4. **View logs**: `docker-compose logs -f [service]`
5. **Stop when done**: `./scripts/run-project.sh stop`

The scripts handle all the complexity of setting up the monorepo, building packages, and orchestrating services, so you can focus on development! 🎉
