
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ChainScalarFieldEnum = {
  chain_id: 'chain_id',
  name: 'name',
  status: 'status',
  last_block_processed: 'last_block_processed',
  provider_urls: 'provider_urls'
};

exports.Prisma.ContractScalarFieldEnum = {
  address: 'address',
  chain_id: 'chain_id',
  type: 'type',
  deployment_block: 'deployment_block',
  abi_hash: 'abi_hash'
};

exports.Prisma.TransactionScalarFieldEnum = {
  tx_id: 'tx_id',
  chain_id: 'chain_id',
  hash: 'hash',
  block_number: 'block_number',
  block_hash: 'block_hash',
  timestamp: 'timestamp',
  status: 'status',
  confirmations: 'confirmations'
};

exports.Prisma.EventScalarFieldEnum = {
  event_id: 'event_id',
  chain_id: 'chain_id',
  tx_hash: 'tx_hash',
  log_index: 'log_index',
  name: 'name',
  contract_address: 'contract_address',
  params: 'params',
  correlation_window_id: 'correlation_window_id',
  buffer_status: 'buffer_status',
  operation_id: 'operation_id'
};

exports.Prisma.MessageScalarFieldEnum = {
  message_id: 'message_id',
  nonce: 'nonce',
  from_chain: 'from_chain',
  to_chain: 'to_chain',
  sent_tx_id: 'sent_tx_id',
  recv_tx_id: 'recv_tx_id',
  status: 'status',
  sent_at: 'sent_at',
  received_at: 'received_at'
};

exports.Prisma.OperationScalarFieldEnum = {
  op_id: 'op_id',
  op_type: 'op_type',
  user_address: 'user_address',
  from_chain: 'from_chain',
  to_chain: 'to_chain',
  message_nonce: 'message_nonce',
  message_id: 'message_id',
  start_tx_id: 'start_tx_id',
  end_tx_id: 'end_tx_id',
  status: 'status',
  substatus: 'substatus',
  details: 'details',
  retry_count: 'retry_count',
  created_at: 'created_at',
  updated_at: 'updated_at',
  last_event_at: 'last_event_at',
  next_retry_at: 'next_retry_at',
  error_context: 'error_context'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ChainStatus = exports.$Enums.ChainStatus = {
  active: 'active',
  degraded: 'degraded',
  offline: 'offline'
};

exports.ContractType = exports.$Enums.ContractType = {
  Controller: 'Controller',
  Router: 'Router'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  pending: 'pending',
  confirmed: 'confirmed',
  orphaned: 'orphaned'
};

exports.BufferStatus = exports.$Enums.BufferStatus = {
  immediate: 'immediate',
  buffered: 'buffered',
  expired: 'expired',
  processed: 'processed'
};

exports.MessageStatus = exports.$Enums.MessageStatus = {
  sent: 'sent',
  delivered: 'delivered',
  timeout: 'timeout',
  unknown: 'unknown'
};

exports.OperationType = exports.$Enums.OperationType = {
  AddCollateral: 'AddCollateral',
  Borrow: 'Borrow',
  Withdraw: 'Withdraw'
};

exports.OperationStatus = exports.$Enums.OperationStatus = {
  ongoing: 'ongoing',
  completed: 'completed',
  rejected: 'rejected',
  stuck: 'stuck',
  orphaned: 'orphaned',
  timeout: 'timeout'
};

exports.Prisma.ModelName = {
  Chain: 'Chain',
  Contract: 'Contract',
  Transaction: 'Transaction',
  Event: 'Event',
  Message: 'Message',
  Operation: 'Operation'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/danielolaya/Documents/Projects/rather-labs-challenge/packages/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/danielolaya/Documents/Projects/rather-labs-challenge/packages/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// Enums\nenum ChainStatus {\n  active\n  degraded\n  offline\n}\n\nenum ContractType {\n  Controller\n  Router\n}\n\nenum TransactionStatus {\n  pending\n  confirmed\n  orphaned\n}\n\nenum BufferStatus {\n  immediate\n  buffered\n  expired\n  processed\n}\n\nenum MessageStatus {\n  sent\n  delivered\n  timeout\n  unknown\n}\n\nenum OperationType {\n  AddCollateral\n  Borrow\n  Withdraw\n}\n\nenum OperationStatus {\n  ongoing\n  completed\n  rejected\n  stuck\n  orphaned\n  timeout\n}\n\n// Tables\nmodel Chain {\n  chain_id             Int         @id\n  name                 String\n  status               ChainStatus\n  last_block_processed BigInt\n  provider_urls        Json // Array of RPC URLs\n\n  // Relations\n  contracts       Contract[]\n  transactions    Transaction[]\n  events          Event[]\n  messages_from   Message[]     @relation(\"MessageFromChain\")\n  messages_to     Message[]     @relation(\"MessageToChain\")\n  operations_from Operation[]   @relation(\"OperationFromChain\")\n  operations_to   Operation[]   @relation(\"OperationToChain\")\n\n  @@map(\"chains\")\n}\n\nmodel Contract {\n  address          String       @id\n  chain_id         Int\n  type             ContractType\n  deployment_block BigInt\n  abi_hash         String\n\n  // Relations\n  chain Chain @relation(fields: [chain_id], references: [chain_id])\n\n  @@index([chain_id])\n  @@map(\"contracts\")\n}\n\nmodel Transaction {\n  tx_id         String            @id @default(uuid()) @db.Uuid\n  chain_id      Int\n  hash          String            @unique\n  block_number  BigInt\n  block_hash    String\n  timestamp     DateTime\n  status        TransactionStatus\n  confirmations Int\n\n  // Relations\n  chain            Chain       @relation(fields: [chain_id], references: [chain_id])\n  events           Event[]\n  messages_sent    Message[]   @relation(\"MessageSentTransaction\")\n  messages_recv    Message[]   @relation(\"MessageRecvTransaction\")\n  operations_start Operation[] @relation(\"Operationstart_transaction\")\n  operations_end   Operation[] @relation(\"OperationEndTransaction\")\n\n  @@index([chain_id])\n  @@index([block_number])\n  @@index([timestamp])\n  @@map(\"transactions\")\n}\n\nmodel Event {\n  event_id              String       @id @default(uuid()) @db.Uuid\n  chain_id              Int\n  tx_hash               String\n  log_index             Int\n  name                  String\n  contract_address      String\n  params                Json\n  correlation_window_id String?      @db.Uuid\n  buffer_status         BufferStatus\n  operation_id          String?      @db.Uuid\n\n  // Relations\n  chain       Chain       @relation(fields: [chain_id], references: [chain_id])\n  transaction Transaction @relation(fields: [tx_hash], references: [hash])\n  operation   Operation?  @relation(fields: [operation_id], references: [op_id])\n\n  @@unique([chain_id, tx_hash, log_index])\n  @@index([chain_id])\n  @@index([tx_hash])\n  @@index([contract_address])\n  @@index([name])\n  @@index([correlation_window_id])\n  @@index([buffer_status])\n  @@index([operation_id])\n  @@map(\"events\")\n}\n\nmodel Message {\n  message_id  String        @id @default(uuid()) @db.Uuid\n  nonce       Decimal\n  from_chain  Int\n  to_chain    Int\n  sent_tx_id  String        @db.Uuid\n  recv_tx_id  String?       @db.Uuid\n  status      MessageStatus\n  sent_at     DateTime\n  received_at DateTime?\n\n  // Relations\n  from_chain_rel   Chain        @relation(\"MessageFromChain\", fields: [from_chain], references: [chain_id])\n  to_chain_rel     Chain        @relation(\"MessageToChain\", fields: [to_chain], references: [chain_id])\n  sent_transaction Transaction  @relation(\"MessageSentTransaction\", fields: [sent_tx_id], references: [tx_id])\n  recv_transaction Transaction? @relation(\"MessageRecvTransaction\", fields: [recv_tx_id], references: [tx_id])\n  operations       Operation[]\n\n  @@index([nonce])\n  @@index([from_chain])\n  @@index([to_chain])\n  @@index([status])\n  @@index([sent_at])\n  @@map(\"messages\")\n}\n\nmodel Operation {\n  op_id         String          @id @default(uuid()) @db.Uuid\n  op_type       OperationType\n  user_address  String\n  from_chain    Int\n  to_chain      Int\n  message_nonce Decimal?\n  message_id    String?         @db.Uuid\n  start_tx_id   String          @db.Uuid\n  end_tx_id     String?         @db.Uuid\n  status        OperationStatus\n  substatus     String?\n  details       Json\n  retry_count   Int\n  created_at    DateTime        @default(now())\n  updated_at    DateTime        @updatedAt\n  last_event_at DateTime\n  next_retry_at DateTime?\n  error_context Json?\n\n  // Relations\n  from_chain_rel    Chain        @relation(\"OperationFromChain\", fields: [from_chain], references: [chain_id])\n  to_chain_rel      Chain        @relation(\"OperationToChain\", fields: [to_chain], references: [chain_id])\n  message           Message?     @relation(fields: [message_id], references: [message_id])\n  start_transaction Transaction  @relation(\"Operationstart_transaction\", fields: [start_tx_id], references: [tx_id])\n  end_transaction   Transaction? @relation(\"OperationEndTransaction\", fields: [end_tx_id], references: [tx_id])\n  events            Event[]\n\n  @@index([op_type])\n  @@index([user_address])\n  @@index([from_chain])\n  @@index([to_chain])\n  @@index([status])\n  @@index([substatus])\n  @@index([created_at])\n  @@index([updated_at])\n  @@index([last_event_at])\n  @@index([next_retry_at])\n  @@index([message_nonce])\n  @@map(\"operations\")\n}\n",
  "inlineSchemaHash": "b808cf5a1b5ab9974876a7eb40632e8f6b4af802c4770c8d6a978284ce22f218",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Chain\":{\"dbName\":\"chains\",\"fields\":[{\"name\":\"chain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChainStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_block_processed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider_urls\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contracts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contract\",\"relationName\":\"ChainToContract\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"ChainToTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"ChainToEvent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages_from\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageFromChain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages_to\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageToChain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operations_from\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"relationName\":\"OperationFromChain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operations_to\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"relationName\":\"OperationToChain\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contract\":{\"dbName\":\"contracts\",\"fields\":[{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContractType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deployment_block\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abi_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"ChainToContract\",\"relationFromFields\":[\"chain_id\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transaction\":{\"dbName\":\"transactions\",\"fields\":[{\"name\":\"tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"block_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TransactionStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmations\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"ChainToTransaction\",\"relationFromFields\":[\"chain_id\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages_sent\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageSentTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messages_recv\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageRecvTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operations_start\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"relationName\":\"Operationstart_transaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operations_end\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"relationName\":\"OperationEndTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Event\":{\"dbName\":\"events\",\"fields\":[{\"name\":\"event_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tx_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contract_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"params\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correlation_window_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buffer_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BufferStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"ChainToEvent\",\"relationFromFields\":[\"chain_id\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"EventToTransaction\",\"relationFromFields\":[\"tx_hash\"],\"relationToFields\":[\"hash\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"relationName\":\"EventToOperation\",\"relationFromFields\":[\"operation_id\"],\"relationToFields\":[\"op_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"chain_id\",\"tx_hash\",\"log_index\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"chain_id\",\"tx_hash\",\"log_index\"]}],\"isGenerated\":false},\"Message\":{\"dbName\":\"messages\",\"fields\":[{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nonce\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_chain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_chain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recv_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MessageStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"received_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_chain_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"MessageFromChain\",\"relationFromFields\":[\"from_chain\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_chain_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"MessageToChain\",\"relationFromFields\":[\"to_chain\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sent_transaction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"MessageSentTransaction\",\"relationFromFields\":[\"sent_tx_id\"],\"relationToFields\":[\"tx_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recv_transaction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"MessageRecvTransaction\",\"relationFromFields\":[\"recv_tx_id\"],\"relationToFields\":[\"tx_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"operations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Operation\",\"relationName\":\"MessageToOperation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Operation\":{\"dbName\":\"operations\",\"fields\":[{\"name\":\"op_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"op_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OperationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_chain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_chain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_nonce\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_tx_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OperationStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"substatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retry_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"last_event_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_retry_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"error_context\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from_chain_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"OperationFromChain\",\"relationFromFields\":[\"from_chain\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_chain_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Chain\",\"relationName\":\"OperationToChain\",\"relationFromFields\":[\"to_chain\"],\"relationToFields\":[\"chain_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Message\",\"relationName\":\"MessageToOperation\",\"relationFromFields\":[\"message_id\"],\"relationToFields\":[\"message_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_transaction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"Operationstart_transaction\",\"relationFromFields\":[\"start_tx_id\"],\"relationToFields\":[\"tx_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_transaction\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"OperationEndTransaction\",\"relationFromFields\":[\"end_tx_id\"],\"relationToFields\":[\"tx_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"events\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Event\",\"relationName\":\"EventToOperation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ChainStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"degraded\",\"dbName\":null},{\"name\":\"offline\",\"dbName\":null}],\"dbName\":null},\"ContractType\":{\"values\":[{\"name\":\"Controller\",\"dbName\":null},{\"name\":\"Router\",\"dbName\":null}],\"dbName\":null},\"TransactionStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"confirmed\",\"dbName\":null},{\"name\":\"orphaned\",\"dbName\":null}],\"dbName\":null},\"BufferStatus\":{\"values\":[{\"name\":\"immediate\",\"dbName\":null},{\"name\":\"buffered\",\"dbName\":null},{\"name\":\"expired\",\"dbName\":null},{\"name\":\"processed\",\"dbName\":null}],\"dbName\":null},\"MessageStatus\":{\"values\":[{\"name\":\"sent\",\"dbName\":null},{\"name\":\"delivered\",\"dbName\":null},{\"name\":\"timeout\",\"dbName\":null},{\"name\":\"unknown\",\"dbName\":null}],\"dbName\":null},\"OperationType\":{\"values\":[{\"name\":\"AddCollateral\",\"dbName\":null},{\"name\":\"Borrow\",\"dbName\":null},{\"name\":\"Withdraw\",\"dbName\":null}],\"dbName\":null},\"OperationStatus\":{\"values\":[{\"name\":\"ongoing\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null},{\"name\":\"stuck\",\"dbName\":null},{\"name\":\"orphaned\",\"dbName\":null},{\"name\":\"timeout\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
