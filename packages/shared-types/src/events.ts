import { OperationType, OperationStatus, MessageStatus, TransactionStatus } from './database';

// Base event interface
export interface BaseEvent {
  timestamp: Date;
  chain_id: number;
  tx_hash: string;
  block_number: bigint;
  contract_address: string;
}

// Cross-chain protocol events
export interface AddCollateralEvent extends BaseEvent {
  type: 'AddCollateral';
  user: string;
  token: string;
  amount: string;
  operationId: string;
}

export interface CollateralAddedEvent extends BaseEvent {
  type: 'CollateralAdded';
  user: string;
  token: string;
  amount: string;
  operationId: string;
}

export interface CollateralRejectedEvent extends BaseEvent {
  type: 'CollateralRejected';
  user: string;
  token: string;
  amount: string;
  operationId: string;
  reason: string;
}

export interface BorrowEvent extends BaseEvent {
  type: 'Borrow';
  user: string;
  token: string;
  amount: string;
  operationId: string;
  collateralAmount: string;
}

export interface BorrowUpdatedEvent extends BaseEvent {
  type: 'BorrowUpdated';
  user: string;
  token: string;
  amount: string;
  operationId: string;
  newCollateralAmount: string;
}

export interface BorrowRejectedEvent extends BaseEvent {
  type: 'BorrowRejected';
  user: string;
  token: string;
  amount: string;
  operationId: string;
  reason: string;
}

export interface WithdrawEvent extends BaseEvent {
  type: 'Withdraw';
  user: string;
  token: string;
  amount: string;
  operationId: string;
}

export interface WithdrawRejectedEvent extends BaseEvent {
  type: 'WithdrawRejected';
  user: string;
  token: string;
  amount: string;
  operationId: string;
  reason: string;
}

export interface WithdrawnEvent extends BaseEvent {
  type: 'Withdrawn';
  user: string;
  token: string;
  amount: string;
  operationId: string;
}

export interface MessageSentEvent extends BaseEvent {
  type: 'MessageSent';
  nonce: string; // Decimal as string
  destination_chain: number;
  message_hash: string;
  payload: string; // Hex encoded data
}

export interface MessageReceivedEvent extends BaseEvent {
  type: 'MessageReceived';
  nonce: string; // Decimal as string
  source_chain: number;
  message_hash: string;
  success: boolean;
}

export interface OperationStartedEvent extends BaseEvent {
  type: 'OperationStarted';
  operation_id: string; // UUID
  operation_type: OperationType;
  user: string;
  from_chain: number;
  to_chain: number;
}

export interface OperationCompletedEvent extends BaseEvent {
  type: 'OperationCompleted';
  operation_id: string; // UUID
  success: boolean;
  final_status: OperationStatus;
}

// Union type for all protocol events
export type ProtocolEvent =
  | AddCollateralEvent
  | CollateralAddedEvent
  | CollateralRejectedEvent
  | BorrowEvent
  | BorrowUpdatedEvent
  | BorrowRejectedEvent
  | WithdrawEvent
  | WithdrawRejectedEvent
  | WithdrawnEvent
  | MessageSentEvent
  | MessageReceivedEvent
  | OperationStartedEvent
  | OperationCompletedEvent;

// Event processing types
export interface EventProcessingContext {
  event: ProtocolEvent;
  correlation_window_id?: string;
  related_events: ProtocolEvent[];
  processing_timestamp: Date;
}

export interface EventFilter {
  chain_ids?: number[];
  contract_addresses?: string[];
  event_types?: string[];
  from_block?: bigint;
  to_block?: bigint;
  user_address?: string;
}

// Event handler types
export type EventHandler<T extends ProtocolEvent = ProtocolEvent> = (
  event: T,
  context: EventProcessingContext
) => Promise<void>;

export interface EventHandlerRegistry {
  AddCollateral: EventHandler<AddCollateralEvent>[];
  CollateralAdded: EventHandler<CollateralAddedEvent>[];
  CollateralRejected: EventHandler<CollateralRejectedEvent>[];
  Borrow: EventHandler<BorrowEvent>[];
  BorrowUpdated: EventHandler<BorrowUpdatedEvent>[];
  BorrowRejected: EventHandler<BorrowRejectedEvent>[];
  Withdraw: EventHandler<WithdrawEvent>[];
  WithdrawRejected: EventHandler<WithdrawRejectedEvent>[];
  Withdrawn: EventHandler<WithdrawnEvent>[];
  MessageSent: EventHandler<MessageSentEvent>[];
  MessageReceived: EventHandler<MessageReceivedEvent>[];
  OperationStarted: EventHandler<OperationStartedEvent>[];
  OperationCompleted: EventHandler<OperationCompletedEvent>[];
}

// Queue job types for BullMQ
export interface RawEventJob {
  chainId: number;
  txHash: string;
  logIndex: number;
  blockNumber: string;
  blockHash: string;
  contractAddress: string;
  eventName: string;
  data: string;
  topics: string[];
  timestamp: Date;
}

export interface BufferEventJob {
  eventId: string;
  chainId: number;
  correlationWindowId?: string;
  bufferExpiresAt: Date;
}

export interface LinkEventJob {
  eventId: string;
  operationId: string;
  strategy: string;
  correlationStrategy?: string;
  correlatedEventIds?: string[];
  confidence: number;
}

export interface ConsolidateOperationJob {
  operationId: string;
  eventIds: string[];
  triggerEvent?: string;
}

export interface ReorgRecoveryJob {
  chainId: number;
  blockNumber: string;
  affectedBlocks: string[];
  reorgDepth?: number;
}