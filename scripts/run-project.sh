#!/bin/bash

# Cross-Chain Lending Protocol - Project Runner Script
# This script sets up and runs the entire project including all packages, dependencies, and services
# Includes automatic Prisma client regeneration with proper binary targets for Docker compatibility

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_error "Node.js version 18+ is required. Current version: $(node --version)"
        exit 1
    fi
    print_success "Node.js version: $(node --version)"
    
    # Check pnpm
    if ! command_exists pnpm; then
        print_error "pnpm is not installed. Installing pnpm..."
        npm install -g pnpm
    fi
    print_success "pnpm version: $(pnpm --version)"
    
    # Check Docker
    if ! command_exists docker; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    print_success "Docker version: $(docker --version)"
    
    # Check Docker Compose
    if ! command_exists docker-compose && ! docker compose version >/dev/null 2>&1; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    print_success "Docker Compose is available"
    
    # Check if Docker daemon is running
    if ! docker info >/dev/null 2>&1; then
        print_error "Docker daemon is not running. Please start Docker first."
        exit 1
    fi
    print_success "Docker daemon is running"
}

# Function to setup environment
setup_environment() {
    print_status "Setting up environment..."
    
    # Create .env files if they don't exist
    if [ ! -f "apps/api/.env" ]; then
        print_warning "Creating apps/api/.env file..."
        cat > apps/api/.env << EOF
# Database
DATABASE_URL=

# Redis
REDIS_URL=

# Server
PORT=

# CORS
CORS_ORIGINS=

# Rate Limiting
RATE_LIMIT_TTL=

# Configuration Files
CHAINS_CONFIG_PATH=

# Relayer Configuration
RELAYER_PRIVATE_KEY=

ROUTER_ADDRESS=
EOF
        print_success "Created apps/api/.env"
    fi
    
    if [ ! -f "apps/worker/.env" ]; then
        print_warning "Creating apps/worker/.env file..."
        cat > apps/worker/.env << EOF
# Database
DATABASE_URL=

# Redis
REDIS_URL=

# Configuration Files
CHAINS_CONFIG_PATH=

# API Configuration
API_URL=
EOF
        print_success "Created apps/worker/.env"
    fi
    
    if [ ! -f "apps/web/.env.local" ]; then
        print_warning "Creating apps/web/.env.local file..."
        cat > apps/web/.env.local << EOF
# API Configuration
NEXT_PUBLIC_API_URL=

# WalletConnect (optional)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
EOF
        print_success "Created apps/web/.env.local"
    fi
    
    # Load environment variables from .env files for docker-compose
    print_status "Loading environment variables from .env files..."
    
    # Load API .env file
    if [ -f "apps/api/.env" ]; then
        export $(grep -v '^#' apps/api/.env | xargs)
        print_success "Loaded apps/api/.env"
    fi
    
    # Load worker .env file
    if [ -f "apps/worker/.env" ]; then
        export $(grep -v '^#' apps/worker/.env | xargs)
        print_success "Loaded apps/worker/.env"
    fi
    
    # Load web .env file
    if [ -f "apps/web/.env.local" ]; then
        export $(grep -v '^#' apps/web/.env.local | xargs)
        print_success "Loaded apps/web/.env.local"
    fi
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    # Install root dependencies
    pnpm install
    
    print_success "All dependencies installed"
}

# Function to setup Prisma
setup_prisma() {
    print_status "Setting up Prisma..."
    
    # Navigate to prisma package
    cd packages/prisma
    
    # Remove existing generated client to ensure clean regeneration
    if [ -d "generated" ]; then
        print_status "Removing existing Prisma client..."
        rm -rf generated/
    fi
    
    # Regenerate Prisma client with new binary targets
    print_status "Regenerating Prisma client with new binary targets..."
    pnpm generate
    
    # Return to root directory
    cd ../..
    
    print_success "Prisma setup complete"
}

# Function to setup database
setup_database() {
    print_status "Setting up database..."
    
    # Wait for PostgreSQL to be ready
    print_status "Waiting for PostgreSQL to be ready..."
    until docker exec crosschain-postgres pg_isready -U postgres >/dev/null 2>&1; do
        sleep 2
    done
    print_success "PostgreSQL is ready"
    
    # Prisma client is already generated in setup_prisma function
    print_status "Prisma client is ready"
    
    # Run database migrations
    print_status "Running database migrations..."
    pnpm -F prisma migrate dev
    
    # Seed database (optional)
    read -p "Do you want to seed the database? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Seeding database..."
        pnpm -F prisma seed
    fi
    
    print_success "Database setup complete"
}

# Function to start services
start_services() {
    print_status "Starting services..."
    
    # Start infrastructure services (PostgreSQL, Redis)
    print_status "Starting infrastructure services..."
    docker-compose up -d postgres redis
    
    # Wait for services to be healthy
    print_status "Waiting for services to be healthy..."
    sleep 10
    
    # Setup Prisma
    setup_prisma
    
    # Setup database
    setup_database
    
    # Build all packages
    print_status "Building all packages..."
    pnpm build
    
    # Start API service
    print_status "Starting API service..."
    docker-compose up -d api
    
    # Wait for API to be ready
    print_status "Waiting for API to be ready..."
    sleep 15
    
    # Start worker service
    print_status "Starting worker service..."
    docker-compose up -d worker
    
    # Start web service
    print_status "Starting web service..."
    docker-compose up -d web
    
    print_success "All services started"
}

# Function to show status
show_status() {
    print_status "Project status:"
    echo
    
    # Show Docker containers status
    docker-compose ps
    
    echo
    print_status "Service URLs:"
    echo "  - API: http://localhost:3000"
    echo "  - Web: http://localhost:3001"
    echo "  - PostgreSQL: localhost:5432"
    echo "  - Redis: localhost:6379"
    echo
    
    print_status "Useful commands:"
    echo "  - View logs: docker-compose logs -f [service_name]"
    echo "  - Stop services: docker-compose down"
    echo "  - Restart services: docker-compose restart"
    echo "  - Rebuild: docker-compose up --build -d"
}

# Function to stop services
stop_services() {
    print_status "Stopping all services..."
    docker-compose down -v
    print_success "All services stopped"
}

# Function to show logs
show_logs() {
    local service=${1:-"all"}
    
    if [ "$service" = "all" ]; then
        print_status "Showing logs for all services..."
        docker-compose logs -f
    else
        print_status "Showing logs for $service service..."
        docker-compose logs -f "$service"
    fi
}

# Function to rebuild services
rebuild_services() {
    print_status "Rebuilding all services..."
    docker-compose down
    docker-compose up --build -d
    print_success "Services rebuilt and started"
}

# Main script logic
main() {
    echo -e "${GREEN}================================${NC}"
    echo -e "${GREEN}  Cross-Chain Lending Protocol${NC}"
    echo -e "${GREEN}  Project Runner Script${NC}"
    echo -e "${GREEN}================================${NC}"
    echo
    
    case "${1:-start}" in
        "start")
            check_prerequisites
            setup_environment
            install_dependencies
            start_services
            show_status
            ;;
        "stop")
            stop_services
            ;;
        "restart")
            stop_services
            sleep 5
            start_services
            show_status
            ;;
        "rebuild")
            rebuild_services
            show_status
            ;;
        "logs")
            show_logs "$2"
            ;;
        "status")
            show_status
            ;;
        "setup")
            check_prerequisites
            setup_environment
            install_dependencies
            ;;
        "prisma")
            check_prerequisites
            setup_prisma
            ;;
        "help"|"-h"|"--help")
            echo "Usage: $0 [command]"
            echo
            echo "Commands:"
            echo "  start     - Start all services (default)"
            echo "  stop      - Stop all services"
            echo "  restart   - Restart all services"
            echo "  rebuild   - Rebuild and start all services"
            echo "  logs      - Show logs (optionally specify service name)"
            echo "  status    - Show current status"
            echo "  setup     - Setup environment and dependencies only"
            echo "  prisma    - Setup Prisma client with new binary targets"
            echo "  help      - Show this help message"
            echo
            echo "Examples:"
            echo "  $0                    # Start all services"
            echo "  $0 logs api          # Show API logs"
            echo "  $0 logs worker       # Show worker logs"
            echo "  $0 logs web          # Show web logs"
            echo "  $0 rebuild           # Rebuild all services"
            echo "  $0 prisma            # Setup Prisma client"
            ;;
        *)
            print_error "Unknown command: $1"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
