FROM node:18-slim AS base

# Install pnpm
RUN npm install -g pnpm

# Install OpenSSL and other required dependencies for Prisma
RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/ ./packages/
COPY apps/worker/package.json ./apps/worker/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY apps/worker/ ./apps/worker/

# Build the application
WORKDIR /app/apps/worker
RUN pnpm build

# Production stage
FROM node:18-slim AS production

# Install pnpm
RUN npm install -g pnpm

# Install OpenSSL and other required dependencies for Prisma
RUN apt-get update && apt-get install -y \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files and install production dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/ ./packages/
COPY apps/worker/package.json ./apps/worker/

RUN pnpm install --frozen-lockfile --prod

# Copy built application
COPY --from=base /app/apps/worker/dist ./apps/worker/dist

# Create config directory
RUN mkdir -p /app/config

WORKDIR /app/apps/worker

CMD ["node", "dist/main"]