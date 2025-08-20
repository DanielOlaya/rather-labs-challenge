import { ApiProperty } from '@nestjs/swagger';

// Base Operation Schema
export class OperationSchema {
  @ApiProperty({ description: 'Unique operation ID', example: 'op-123456789' })
  id: string;

  @ApiProperty({ description: 'Operation type', example: 'AddCollateral' })
  type: string;

  @ApiProperty({ description: 'Operation status', example: 'ongoing' })
  status: string;

  @ApiProperty({ description: 'User address', example: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6' })
  user: string;

  @ApiProperty({ description: 'Source chain ID', example: 11155111 })
  fromChain: number;

  @ApiProperty({ description: 'Destination chain ID', example: 1 })
  toChain: number;

  @ApiProperty({ description: 'Operation creation timestamp', example: '2024-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({ description: 'Operation update timestamp', example: '2024-01-01T00:00:00.000Z' })
  updatedAt: string;
}

// Chain Information Schema
export class ChainInfoSchema {
  @ApiProperty({ description: 'Chain ID', example: 11155111 })
  id: number;

  @ApiProperty({ description: 'Chain name', example: 'Sepolia' })
  name: string;

  @ApiProperty({ description: 'Chain status', example: 'active' })
  status: string;

  @ApiProperty({ description: 'Last processed block', example: '12345' })
  lastBlockProcessed: string;

  @ApiProperty({ description: 'Provider URLs', example: ['https://sepolia.infura.io'] })
  providerUrls: string[];
}

// Transaction Schema
export class TransactionSchema {
  @ApiProperty({ description: 'Transaction hash', example: '0x1234567890abcdef...' })
  hash: string;

  @ApiProperty({ description: 'Block number', example: '12345' })
  blockNumber: string;

  @ApiProperty({ description: 'Block hash', example: '0xabcdef1234567890...' })
  blockHash: string;

  @ApiProperty({ description: 'Transaction status', example: 'confirmed' })
  status: string;

  @ApiProperty({ description: 'Transaction timestamp', example: '2024-01-01T00:00:00.000Z' })
  timestamp: string;

  @ApiProperty({ description: 'Number of confirmations', example: 12 })
  confirmations: number;

  @ApiProperty({ description: 'Chain information' })
  chain: ChainInfoSchema;
}

// Event Schema
export class EventSchema {
  @ApiProperty({ description: 'Event ID', example: 'evt-123456789' })
  id: string;

  @ApiProperty({ description: 'Event name', example: 'OperationStarted' })
  name: string;

  @ApiProperty({ description: 'Contract address', example: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6' })
  contractAddress: string;

  @ApiProperty({ description: 'Log index', example: 0 })
  logIndex: number;

  @ApiProperty({ description: 'Event parameters', example: { user: '0x123...', amount: '1000' } })
  params: any;

  @ApiProperty({ description: 'Buffer status', example: 'pending' })
  bufferStatus: string;

  @ApiProperty({ description: 'Correlation window ID', example: 'window-123' })
  correlationWindowId: string;

  @ApiProperty({ description: 'Chain ID', example: 11155111 })
  chainId: number;

  @ApiProperty({ description: 'Transaction hash', example: '0x1234567890abcdef...' })
  txHash: string;
}

// Message Schema
export class MessageSchema {
  @ApiProperty({ description: 'Message ID', example: 'msg-123456789' })
  id: string;

  @ApiProperty({ description: 'Message nonce', example: '42' })
  nonce: string;

  @ApiProperty({ description: 'Message status', example: 'sent' })
  status: string;

  @ApiProperty({ description: 'Source chain ID', example: 11155111 })
  fromChain: number;

  @ApiProperty({ description: 'Destination chain ID', example: 1 })
  toChain: number;

  @ApiProperty({ description: 'Sent transaction details' })
  sentTransaction?: TransactionSchema;

  @ApiProperty({ description: 'Received transaction details' })
  recvTransaction?: TransactionSchema;
}

// Operation with Details Schema
export class OperationWithDetailsSchema extends OperationSchema {
  @ApiProperty({ description: 'Message nonce', example: '42' })
  messageNonce: string;

  @ApiProperty({ description: 'Message ID', example: 'msg-123456789' })
  messageId: string;

  @ApiProperty({ description: 'Operation substatus', example: 'processing' })
  substatus: string;

  @ApiProperty({ description: 'Retry count', example: 0 })
  retryCount: number;

  @ApiProperty({ description: 'Next retry timestamp', example: '2024-01-01T00:00:00.000Z' })
  nextRetryAt: string;

  @ApiProperty({ description: 'Error context', example: 'Network timeout' })
  errorContext: string;

  @ApiProperty({ description: 'Operation details', example: { token: 'USDC', amount: '1000' } })
  details: any;

  @ApiProperty({ description: 'Last event timestamp', example: '2024-01-01T00:00:00.000Z' })
  lastEventAt: string;

  @ApiProperty({ description: 'Source chain information' })
  fromChainInfo: ChainInfoSchema;

  @ApiProperty({ description: 'Destination chain information' })
  toChainInfo: ChainInfoSchema;

  @ApiProperty({ description: 'Start transaction details' })
  startTransaction: TransactionSchema;

  @ApiProperty({ description: 'End transaction details' })
  endTransaction: TransactionSchema;

  @ApiProperty({ description: 'Message details' })
  message: MessageSchema;

  @ApiProperty({ description: 'Events information' })
  events: {
    startTransaction: EventSchema[];
    endTransaction: EventSchema[];
  };

  @ApiProperty({ description: 'Timestamps' })
  timestamps: {
    created: string;
    updated: string;
    lastEvent: string;
    nextRetry: string;
  };
}

// Health Response Schema
export class HealthResponseSchema {
  @ApiProperty({ description: 'Health status', example: 'ok' })
  status: string;

  @ApiProperty({ description: 'Health check timestamp', example: '2024-01-01T00:00:00.000Z' })
  timestamp: string;

  @ApiProperty({ description: 'System uptime in seconds', example: 3600 })
  uptime: number;

  @ApiProperty({ description: 'API version', example: '1.0.0' })
  version: string;
}

// Chain Health Schema
export class ChainHealthSchema {
  @ApiProperty({ description: 'Chain ID', example: 11155111 })
  chainId: number;

  @ApiProperty({ description: 'Chain name', example: 'Sepolia' })
  name: string;

  @ApiProperty({ description: 'Chain status', example: 'active' })
  status: string;

  @ApiProperty({ description: 'Last processed block', example: '12345' })
  lastBlockProcessed: string;

  @ApiProperty({ description: 'Whether the chain is healthy', example: true })
  isHealthy: boolean;

  @ApiProperty({ description: 'Provider URL', example: 'https://sepolia.infura.io' })
  providerUrl?: string;
}

// Queue Health Schema
export class QueueHealthSchema {
  @ApiProperty({ description: 'Number of waiting jobs', example: 5 })
  waiting: number;

  @ApiProperty({ description: 'Number of active jobs', example: 2 })
  active: number;

  @ApiProperty({ description: 'Number of completed jobs', example: 100 })
  completed: number;

  @ApiProperty({ description: 'Number of failed jobs', example: 1 })
  failed: number;
}

// Success Response Schema
export class SuccessResponseSchema {
  @ApiProperty({ description: 'Success status', example: true })
  success: boolean;

  @ApiProperty({ description: 'Response message', example: 'Operation completed successfully' })
  message: string;

  @ApiProperty({ description: 'Response data' })
  data?: any;
}

// Error Response Schema
export class ErrorResponseSchema {
  @ApiProperty({ description: 'Success status', example: false })
  success: boolean;

  @ApiProperty({ description: 'Error message', example: 'Operation failed' })
  message: string;

  @ApiProperty({ description: 'Error details', example: 'Network timeout' })
  error: string;

  @ApiProperty({ description: 'Error timestamp', example: '2024-01-01T00:00:00.000Z' })
  timestamp?: string;
}
