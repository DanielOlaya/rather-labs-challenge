// Re-export Prisma-generated types to avoid conflicts
export { 
  ChainStatus,
  ContractType,
  TransactionStatus,
  BufferStatus,
  MessageStatus,
  OperationType,
  OperationStatus,
} from 'prisma';

// Import the Prisma types and re-export them
import type { 
  Chain as PrismaChain,
  Contract as PrismaContract,
  Transaction as PrismaTransaction,
  Event as PrismaEvent,
  Message as PrismaMessage,
  Operation as PrismaOperation,
  Prisma,
} from 'prisma';

export type Chain = PrismaChain;
export type Contract = PrismaContract;
export type Transaction = PrismaTransaction;
export type Event = PrismaEvent;
export type Message = PrismaMessage;
export type Operation = PrismaOperation;

// Define the OperationWithRelations type to match exactly what Prisma returns
export type OperationWithRelations = Prisma.OperationGetPayload<{
  include: {
    from_chain_rel: true;
    to_chain_rel: true;
    start_transaction: {
      include: {
        chain: true;
        events: true;
      };
    };
    end_transaction: {
      include: {
        chain: true;
        events: true;
      };
    };
    message: {
      include: {
        sent_transaction: true;
        recv_transaction: true;
      };
    };
  };
}>;

// Other utility types
export interface ChainWithRelations extends Chain {
  contracts?: Contract[];
  transactions?: Transaction[];
  events?: Event[];
  messages_from?: Message[];
  messages_to?: Message[];
  operations_from?: Operation[];
  operations_to?: Operation[];
}

export interface TransactionWithRelations extends Transaction {
  chain?: Chain;
  events?: Event[];
  messages_sent?: Message[];
  messages_recv?: Message[];
  operations_start?: Operation[];
  operations_end?: Operation[];
}

export interface EventWithRelations extends Event {
  chain?: Chain;
  transaction?: Transaction;
}

export interface MessageWithRelations extends Message {
  from_chain_rel?: Chain;
  to_chain_rel?: Chain;
  sent_transaction?: Transaction;
  recv_transaction?: Transaction;
  operations?: Operation[];
}