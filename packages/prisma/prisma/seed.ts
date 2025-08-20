import { PrismaClient, ChainStatus, ContractType, TransactionStatus, BufferStatus, MessageStatus, OperationType, OperationStatus } from '../generated/client'

const prisma = new PrismaClient()

async function dropAllTables() {
  console.log('Dropping all tables, indexes, and types...')
  try {
    // Drop tables in reverse dependency order (children first, then parents)
    await prisma.$executeRaw`DROP TABLE IF EXISTS "events" CASCADE;`
    await prisma.$executeRaw`DROP TABLE IF EXISTS "operations" CASCADE;`
    await prisma.$executeRaw`DROP TABLE IF EXISTS "messages" CASCADE;`
    await prisma.$executeRaw`DROP TABLE IF EXISTS "transactions" CASCADE;`
    await prisma.$executeRaw`DROP TABLE IF EXISTS "contracts" CASCADE;`
    await prisma.$executeRaw`DROP TABLE IF EXISTS "chains" CASCADE;`
    
    // Drop custom types
    await prisma.$executeRaw`DROP TYPE IF EXISTS "ChainStatus" CASCADE;`
    await prisma.$executeRaw`DROP TYPE IF EXISTS "ContractType" CASCADE;`
    await prisma.$executeRaw`DROP TYPE IF EXISTS "TransactionStatus" CASCADE;`
    await prisma.$executeRaw`DROP TYPE IF EXISTS "BufferStatus" CASCADE;`
    await prisma.$executeRaw`DROP TYPE IF EXISTS "MessageStatus" CASCADE;`
    await prisma.$executeRaw`DROP TYPE IF EXISTS "OperationType" CASCADE;`
    await prisma.$executeRaw`DROP TYPE IF EXISTS "OperationStatus" CASCADE;`
    
    console.log('✓ All tables, indexes, and types dropped successfully!')
  } catch (error) {
    console.error('Error dropping tables:', error.message)
    throw error
  }
}

async function ensureTablesExist() {
  console.log('Ensuring tables exist...')
  
  try {
    // Create enums first
    console.log('Creating enums...')
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "ChainStatus" AS ENUM ('active', 'degraded', 'offline');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "ContractType" AS ENUM ('Controller', 'Router');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "TransactionStatus" AS ENUM ('pending', 'confirmed', 'orphaned');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "BufferStatus" AS ENUM ('immediate', 'buffered', 'expired', 'processed');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "MessageStatus" AS ENUM ('sent', 'delivered', 'timeout', 'unknown');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "OperationType" AS ENUM ('AddCollateral', 'Borrow', 'Withdraw');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        CREATE TYPE "OperationStatus" AS ENUM ('ongoing', 'completed', 'rejected', 'stuck', 'orphaned', 'timeout');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    // Create tables
    console.log('Creating tables...')
    
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "chains" (
        "chain_id" INTEGER NOT NULL,
        "name" TEXT NOT NULL,
        "status" "ChainStatus" NOT NULL,
        "last_block_processed" BIGINT NOT NULL,
        "provider_urls" JSONB NOT NULL,
        CONSTRAINT "chains_pkey" PRIMARY KEY ("chain_id")
      );
    `
    
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "contracts" (
        "address" TEXT NOT NULL,
        "chain_id" INTEGER NOT NULL,
        "type" "ContractType" NOT NULL,
        "deployment_block" BIGINT NOT NULL,
        "abi_hash" TEXT NOT NULL,
        CONSTRAINT "contracts_pkey" PRIMARY KEY ("address")
      );
    `
    
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "transactions" (
        "tx_id" UUID NOT NULL DEFAULT gen_random_uuid(),
        "chain_id" INTEGER NOT NULL,
        "hash" TEXT NOT NULL,
        "block_number" BIGINT NOT NULL,
        "block_hash" TEXT NOT NULL,
        "timestamp" TIMESTAMP(3) NOT NULL,
        "status" "TransactionStatus" NOT NULL,
        "confirmations" INTEGER NOT NULL,
        CONSTRAINT "transactions_pkey" PRIMARY KEY ("tx_id"),
        CONSTRAINT "transactions_hash_key" UNIQUE ("hash")
      );
    `
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "operations" (
        "op_id" UUID NOT NULL DEFAULT gen_random_uuid(),
        "op_type" "OperationType" NOT NULL,
        "user_address" TEXT NOT NULL,
        "from_chain" INTEGER NOT NULL,
        "to_chain" INTEGER NOT NULL,
        "message_nonce" DECIMAL(65,30),
        "message_id" UUID,
        "start_tx_id" UUID NOT NULL,
        "end_tx_id" UUID,
        "status" "OperationStatus" NOT NULL,
        "substatus" TEXT,
        "details" JSONB NOT NULL,
        "retry_count" INTEGER NOT NULL,
        "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP(3) NOT NULL,
        "last_event_at" TIMESTAMP(3) NOT NULL,
        "next_retry_at" TIMESTAMP(3),
        "error_context" JSONB,
        CONSTRAINT "operations_pkey" PRIMARY KEY ("op_id")
      );
    `
    
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "events" (
        "event_id" UUID NOT NULL DEFAULT gen_random_uuid(),
        "chain_id" INTEGER NOT NULL,
        "tx_hash" TEXT NOT NULL,
        "log_index" INTEGER NOT NULL,
        "name" TEXT NOT NULL,
        "contract_address" TEXT NOT NULL,
        "params" JSONB NOT NULL,
        "correlation_window_id" UUID,
        "buffer_status" "BufferStatus" NOT NULL,
        "operation_id" UUID,
        CONSTRAINT "events_pkey" PRIMARY KEY ("event_id"),
        CONSTRAINT "events_chain_id_tx_hash_log_index_key" UNIQUE ("chain_id", "tx_hash", "log_index")
      );
    `
    
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "messages" (
        "message_id" UUID NOT NULL DEFAULT gen_random_uuid(),
        "nonce" DECIMAL(65,30) NOT NULL,
        "from_chain" INTEGER NOT NULL,
        "to_chain" INTEGER NOT NULL,
        "sent_tx_id" UUID NOT NULL,
        "recv_tx_id" UUID,
        "status" "MessageStatus" NOT NULL,
        "sent_at" TIMESTAMP(3) NOT NULL,
        "received_at" TIMESTAMP(3),
        CONSTRAINT "messages_pkey" PRIMARY KEY ("message_id")
      );
    `
    
    // Create indexes
    console.log('Creating indexes...')
    
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "contracts_chain_id_idx" ON "contracts"("chain_id");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "transactions_chain_id_idx" ON "transactions"("chain_id");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "transactions_block_number_idx" ON "transactions"("block_number");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "transactions_timestamp_idx" ON "transactions"("timestamp");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_chain_id_idx" ON "events"("chain_id");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_tx_hash_idx" ON "events"("tx_hash");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_contract_address_idx" ON "events"("contract_address");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_name_idx" ON "events"("name");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_correlation_window_id_idx" ON "events"("correlation_window_id");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_buffer_status_idx" ON "events"("buffer_status");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "events_operation_id_idx" ON "events"("operation_id");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "messages_nonce_idx" ON "messages"("nonce");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "messages_from_chain_idx" ON "messages"("from_chain");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "messages_to_chain_idx" ON "messages"("to_chain");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "messages_status_idx" ON "messages"("status");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "messages_sent_at_idx" ON "messages"("sent_at");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_op_type_idx" ON "operations"("op_type");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_user_address_idx" ON "operations"("user_address");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_from_chain_idx" ON "operations"("from_chain");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_to_chain_idx" ON "operations"("to_chain");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_status_idx" ON "operations"("status");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_substatus_idx" ON "operations"("substatus");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_created_at_idx" ON "operations"("created_at");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_updated_at_idx" ON "operations"("updated_at");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_last_event_at_idx" ON "operations"("last_event_at");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_next_retry_at_idx" ON "operations"("next_retry_at");`
    await prisma.$executeRaw`CREATE INDEX IF NOT EXISTS "operations_message_nonce_idx" ON "operations"("message_nonce");`
    
    // Add foreign key constraints
    console.log('Adding foreign key constraints...')
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "contracts" ADD CONSTRAINT "contracts_chain_id_fkey" 
        FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "transactions" ADD CONSTRAINT "transactions_chain_id_fkey" 
        FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "events" ADD CONSTRAINT "events_chain_id_fkey" 
        FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "events" ADD CONSTRAINT "events_tx_hash_fkey" 
        FOREIGN KEY ("tx_hash") REFERENCES "transactions"("hash") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "events" ADD CONSTRAINT "events_operation_id_fkey" 
        FOREIGN KEY ("operation_id") REFERENCES "operations"("op_id") ON DELETE SET NULL ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "messages" ADD CONSTRAINT "messages_from_chain_fkey" 
        FOREIGN KEY ("from_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "messages" ADD CONSTRAINT "messages_to_chain_fkey" 
        FOREIGN KEY ("to_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "messages" ADD CONSTRAINT "messages_sent_tx_id_fkey" 
        FOREIGN KEY ("sent_tx_id") REFERENCES "transactions"("tx_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "messages" ADD CONSTRAINT "messages_recv_tx_id_fkey" 
        FOREIGN KEY ("recv_tx_id") REFERENCES "transactions"("tx_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "operations" ADD CONSTRAINT "operations_from_chain_fkey" 
        FOREIGN KEY ("from_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "operations" ADD CONSTRAINT "operations_to_chain_fkey" 
        FOREIGN KEY ("to_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "operations" ADD CONSTRAINT "operations_message_id_fkey" 
        FOREIGN KEY ("message_id") REFERENCES "messages"("message_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "operations" ADD CONSTRAINT "operations_start_tx_id_fkey" 
        FOREIGN KEY ("start_tx_id") REFERENCES "transactions"("tx_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    await prisma.$executeRaw`
      DO $$ BEGIN
        ALTER TABLE "operations" ADD CONSTRAINT "operations_end_tx_id_fkey" 
        FOREIGN KEY ("end_tx_id") REFERENCES "transactions"("tx_id") ON DELETE RESTRICT ON UPDATE CASCADE;
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `
    
    console.log('✓ All tables, indexes, and constraints created successfully!')
    
  } catch (error) {
    console.error('Error creating tables:', error.message)
    throw error
  }
}

async function resetDatabase() {
  console.log('Resetting database completely...')
  try {
    await dropAllTables()
    await ensureTablesExist()
    console.log('✓ Database reset completed successfully!')
  } catch (error) {
    console.error('Error resetting database:', error.message)
    throw error
  }
}

async function main() {
  console.log('Starting database seeding...')
  
  // Check if --reset flag is passed
  const shouldReset = process.argv.includes('--reset')
  
  if (shouldReset) {
    console.log('Reset flag detected, completely resetting database...')
    await resetDatabase()
  } else {
    // Ensure tables exist first
    await ensureTablesExist()
  }
  
  console.log('Cleaning existing data...')

  // Clean existing data (in reverse dependency order)
  await prisma.operation.deleteMany()
  await prisma.message.deleteMany()
  await prisma.event.deleteMany()
  await prisma.transaction.deleteMany()
  await prisma.contract.deleteMany()
  await prisma.chain.deleteMany()

  // Seed chains
  const chains = await Promise.all([
    prisma.chain.create({
      data: {
        chain_id: 1,
        name: 'Ethereum Mainnet',
        status: ChainStatus.active,
        last_block_processed: BigInt('18000000'),
        provider_urls: ['https://eth-mainnet.g.alchemy.com/v2/your-api-key', 'https://mainnet.infura.io/v3/your-api-key']
      }
    }),
    prisma.chain.create({
      data: {
        chain_id: 137,
        name: 'Polygon',
        status: ChainStatus.active,
        last_block_processed: BigInt('48000000'),
        provider_urls: ['https://polygon-mainnet.g.alchemy.com/v2/your-api-key', 'https://polygon-rpc.com/']
      }
    }),
    prisma.chain.create({
      data: {
        chain_id: 11155111,
        name: 'Sepolia',
        status: ChainStatus.active,
        last_block_processed: BigInt('9026711'),
        provider_urls: ["https://ethereum-sepolia-rpc.publicnode.com", "wss://sepolia.gateway.tenderly.co", "wss://ethereum-sepolia-rpc.publicnode.com", "https://sepolia.infura.io"]
      }
    })
  ])

  console.log(`Created ${chains.length} chains`)

  // Seed contracts
  const contracts = await Promise.all([
    prisma.contract.create({
      data: {
        address: '0x5520Bb8A47D0355A25608312a282fBD9A375b30F',
        chain_id: 11155111,
        type: ContractType.Controller,
        deployment_block: BigInt('9026711'),
        abi_hash: 'controller_abi_hash_v1'
      }
    }),
    prisma.contract.create({
      data: {
        address: '0x18326944A2a6701C7b1c6C3976E012cCee65A4bF',
        chain_id: 11155111,
        type: ContractType.Router,
        deployment_block: BigInt('9026385'),
        abi_hash: 'router_abi_hash_v1'
      }
    }),
  ])

  console.log(`Created ${contracts.length} contracts`)

  // Seed sample transactions
  const transactions = await Promise.all([
    prisma.transaction.create({
      data: {
        hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890ab',
        chain_id: 1,
        block_number: BigInt('18000001'),
        block_hash: '0xblock1234567890abcdef1234567890abcdef1234567890abcdef1234567890ab',
        timestamp: new Date('2023-10-01T10:00:00Z'),
        status: TransactionStatus.confirmed,
        confirmations: 12
      }
    }),
    prisma.transaction.create({
      data: {
        hash: '0xbcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abc',
        chain_id: 137,
        block_number: BigInt('48000001'),
        block_hash: '0xblock2345678901bcdef1234567890abcdef1234567890abcdef1234567890bc',
        timestamp: new Date('2023-10-01T10:05:00Z'),
        status: TransactionStatus.confirmed,
        confirmations: 25
      }
    })
  ])

  console.log(`Created ${transactions.length} transactions`)

  console.log('Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })