import { 
  Chain, 
  Transaction, 
  Event, 
  Message, 
  Operation, 
  OperationType, 
  OperationStatus,
  MessageStatus,
  TransactionStatus,
  OperationWithRelations
} from './database';

// Common API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Request/Response types for operations
export interface CreateOperationRequest {
  op_type: OperationType;
  user_address: string;
  from_chain: number;
  to_chain: number;
  details: Record<string, any>;
}

export interface CreateOperationResponse extends ApiResponse {
  data?: {
    operation_id: string;
    estimated_completion_time: number; // seconds
  };
}

export interface OperationStatusResponse extends ApiResponse {
  data?: {
    operation: Operation;
    progress: {
      current_step: string;
      total_steps: number;
      completed_steps: number;
      estimated_remaining_time?: number; // seconds
    };
    related_transactions: Transaction[];
    related_messages: Message[];
  };
}

// Chain management types
export interface ChainHealthRequest {
  chain_id: number;
}

export interface ChainHealthResponse extends ApiResponse {
  data?: {
    chain: Chain;
    health: {
      is_synced: boolean;
      latest_block: bigint;
      blocks_behind: number;
      rpc_status: 'healthy' | 'degraded' | 'failing';
      response_times: number[]; // milliseconds for recent requests
    };
  };
}

// Event querying types
export interface EventQueryRequest {
  chain_ids?: number[];
  contract_addresses?: string[];
  event_names?: string[];
  from_block?: number;
  to_block?: number;
  user_address?: string;
  page?: number;
  limit?: number;
  order_by?: 'timestamp' | 'block_number';
  order_direction?: 'asc' | 'desc';
}

export interface EventQueryResponse extends PaginatedResponse<Event> {}

// Transaction types
export interface TransactionQueryRequest {
  chain_id?: number;
  hash?: string;
  status?: TransactionStatus;
  from_block?: number;
  to_block?: number;
  page?: number;
  limit?: number;
}

export interface TransactionQueryResponse extends PaginatedResponse<Transaction> {}

// Message types
export interface MessageQueryRequest {
  from_chain?: number;
  to_chain?: number;
  status?: MessageStatus;
  nonce?: string;
  page?: number;
  limit?: number;
}

export interface MessageQueryResponse extends PaginatedResponse<Message> {}

// Operation types
export interface OperationQueryRequest {
  user_address?: string;
  op_type?: OperationType;
  status?: OperationStatus;
  from_chain?: number;
  to_chain?: number;
  created_after?: Date;
  created_before?: Date;
  page?: number;
  limit?: number;
}

export interface OperationQueryResponse extends PaginatedResponse<Operation> {}

// Retry operation request
export interface RetryOperationRequest {
  operation_id: string;
  reason?: string;
}

export interface RetryOperationResponse extends ApiResponse {
  data?: {
    retry_count: number;
    next_retry_at: Date;
  };
}

// Analytics types
export interface OperationAnalyticsRequest {
  from_date: Date;
  to_date: Date;
  chain_ids?: number[];
  user_address?: string;
}

export interface OperationAnalyticsResponse extends ApiResponse {
  data?: {
    total_operations: number;
    operations_by_type: Record<OperationType, number>;
    operations_by_status: Record<OperationStatus, number>;
    operations_by_chain: Record<number, number>;
    average_completion_time: number; // seconds
    success_rate: number; // percentage
    retry_rate: number; // percentage
  };
}

// WebSocket event types for real-time updates
export interface WebSocketEvent<T = any> {
  type: string;
  timestamp: Date;
  data: T;
}

export interface OperationUpdateEvent extends WebSocketEvent {
  type: 'operation_update';
  data: {
    operation_id: string;
    status: OperationStatus;
    substatus?: string;
    progress?: {
      current_step: string;
      completed_steps: number;
      total_steps: number;
    };
  };
}

export interface TransactionUpdateEvent extends WebSocketEvent {
  type: 'transaction_update';
  data: {
    tx_hash: string;
    chain_id: number;
    status: TransactionStatus;
    confirmations: number;
  };
}

export interface MessageUpdateEvent extends WebSocketEvent {
  type: 'message_update';
  data: {
    message_id: string;
    status: MessageStatus;
    received_at?: Date;
  };
}

export type RealtimeEvent = 
  | OperationUpdateEvent 
  | TransactionUpdateEvent 
  | MessageUpdateEvent;

// Repository filter and pagination types
export interface OperationFilters {
  userAddress?: string;
  status?: OperationStatus;
  opType?: OperationType;
  fromChain?: number;
  toChain?: number;
  createdAfter?: Date;
  createdBefore?: Date;
}

export interface PaginationOptions {
  limit: number;
  cursor?: string;
  offset?: number;
}

export interface EventFilters {
  chainId?: number;
  contractAddress?: string;
  eventName?: string;
  userAddress?: string;
  fromBlock?: bigint;
  toBlock?: bigint;
}

export interface TransactionFilters {
  chainId?: number;
  status?: TransactionStatus;
  fromBlock?: bigint;
  toBlock?: bigint;
  confirmationsMin?: number;
}

export interface MessageFilters {
  fromChain?: number;
  toChain?: number;
  status?: MessageStatus;
  nonce?: string;
}