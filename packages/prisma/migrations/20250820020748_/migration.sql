-- CreateEnum
CREATE TYPE "ChainStatus" AS ENUM ('active', 'degraded', 'offline');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('Controller', 'Router');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('pending', 'confirmed', 'orphaned');

-- CreateEnum
CREATE TYPE "BufferStatus" AS ENUM ('immediate', 'buffered', 'expired', 'processed');

-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('sent', 'delivered', 'timeout', 'unknown');

-- CreateEnum
CREATE TYPE "OperationType" AS ENUM ('AddCollateral', 'Borrow', 'Withdraw');

-- CreateEnum
CREATE TYPE "OperationStatus" AS ENUM ('ongoing', 'completed', 'rejected', 'stuck', 'orphaned', 'timeout');

-- CreateTable
CREATE TABLE "chains" (
    "chain_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" "ChainStatus" NOT NULL,
    "last_block_processed" BIGINT NOT NULL,
    "provider_urls" JSONB NOT NULL,

    CONSTRAINT "chains_pkey" PRIMARY KEY ("chain_id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "address" TEXT NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "type" "ContractType" NOT NULL,
    "deployment_block" BIGINT NOT NULL,
    "abi_hash" TEXT NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("address")
);

-- CreateTable
CREATE TABLE "transactions" (
    "tx_id" UUID NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "block_number" BIGINT NOT NULL,
    "block_hash" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "confirmations" INTEGER NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("tx_id")
);

-- CreateTable
CREATE TABLE "events" (
    "event_id" UUID NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "tx_hash" TEXT NOT NULL,
    "log_index" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "contract_address" TEXT NOT NULL,
    "params" JSONB NOT NULL,
    "correlation_window_id" UUID,
    "buffer_status" "BufferStatus" NOT NULL,
    "operation_id" UUID,

    CONSTRAINT "events_pkey" PRIMARY KEY ("event_id")
);

-- CreateTable
CREATE TABLE "messages" (
    "message_id" UUID NOT NULL,
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

-- CreateTable
CREATE TABLE "operations" (
    "op_id" UUID NOT NULL,
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

-- CreateIndex
CREATE INDEX "contracts_chain_id_idx" ON "contracts"("chain_id");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_hash_key" ON "transactions"("hash");

-- CreateIndex
CREATE INDEX "transactions_chain_id_idx" ON "transactions"("chain_id");

-- CreateIndex
CREATE INDEX "transactions_block_number_idx" ON "transactions"("block_number");

-- CreateIndex
CREATE INDEX "transactions_timestamp_idx" ON "transactions"("timestamp");

-- CreateIndex
CREATE INDEX "events_chain_id_idx" ON "events"("chain_id");

-- CreateIndex
CREATE INDEX "events_tx_hash_idx" ON "events"("tx_hash");

-- CreateIndex
CREATE INDEX "events_contract_address_idx" ON "events"("contract_address");

-- CreateIndex
CREATE INDEX "events_name_idx" ON "events"("name");

-- CreateIndex
CREATE INDEX "events_correlation_window_id_idx" ON "events"("correlation_window_id");

-- CreateIndex
CREATE INDEX "events_buffer_status_idx" ON "events"("buffer_status");

-- CreateIndex
CREATE INDEX "events_operation_id_idx" ON "events"("operation_id");

-- CreateIndex
CREATE UNIQUE INDEX "events_chain_id_tx_hash_log_index_key" ON "events"("chain_id", "tx_hash", "log_index");

-- CreateIndex
CREATE INDEX "messages_nonce_idx" ON "messages"("nonce");

-- CreateIndex
CREATE INDEX "messages_from_chain_idx" ON "messages"("from_chain");

-- CreateIndex
CREATE INDEX "messages_to_chain_idx" ON "messages"("to_chain");

-- CreateIndex
CREATE INDEX "messages_status_idx" ON "messages"("status");

-- CreateIndex
CREATE INDEX "messages_sent_at_idx" ON "messages"("sent_at");

-- CreateIndex
CREATE INDEX "operations_op_type_idx" ON "operations"("op_type");

-- CreateIndex
CREATE INDEX "operations_user_address_idx" ON "operations"("user_address");

-- CreateIndex
CREATE INDEX "operations_from_chain_idx" ON "operations"("from_chain");

-- CreateIndex
CREATE INDEX "operations_to_chain_idx" ON "operations"("to_chain");

-- CreateIndex
CREATE INDEX "operations_status_idx" ON "operations"("status");

-- CreateIndex
CREATE INDEX "operations_substatus_idx" ON "operations"("substatus");

-- CreateIndex
CREATE INDEX "operations_created_at_idx" ON "operations"("created_at");

-- CreateIndex
CREATE INDEX "operations_updated_at_idx" ON "operations"("updated_at");

-- CreateIndex
CREATE INDEX "operations_last_event_at_idx" ON "operations"("last_event_at");

-- CreateIndex
CREATE INDEX "operations_next_retry_at_idx" ON "operations"("next_retry_at");

-- CreateIndex
CREATE INDEX "operations_message_nonce_idx" ON "operations"("message_nonce");

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_tx_hash_fkey" FOREIGN KEY ("tx_hash") REFERENCES "transactions"("hash") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_operation_id_fkey" FOREIGN KEY ("operation_id") REFERENCES "operations"("op_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_from_chain_fkey" FOREIGN KEY ("from_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_to_chain_fkey" FOREIGN KEY ("to_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_sent_tx_id_fkey" FOREIGN KEY ("sent_tx_id") REFERENCES "transactions"("tx_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_recv_tx_id_fkey" FOREIGN KEY ("recv_tx_id") REFERENCES "transactions"("tx_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operations_from_chain_fkey" FOREIGN KEY ("from_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operations_to_chain_fkey" FOREIGN KEY ("to_chain") REFERENCES "chains"("chain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operations_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "messages"("message_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operations_start_tx_id_fkey" FOREIGN KEY ("start_tx_id") REFERENCES "transactions"("tx_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operations" ADD CONSTRAINT "operations_end_tx_id_fkey" FOREIGN KEY ("end_tx_id") REFERENCES "transactions"("tx_id") ON DELETE SET NULL ON UPDATE CASCADE;
