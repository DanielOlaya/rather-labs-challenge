import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  
  DATABASE_URL: Joi.string()
    .uri()
    .required(),
  
  REDIS_URL: Joi.string()
    .uri()
    .default('redis://localhost:6379'),
  
  CHAINS_CONFIG_PATH: Joi.string()
    .default('./config/chains.json'),
  
  CONTRACTS_CONFIG_PATH: Joi.string()
    .default('./config/contracts.json'),
  
  INDEXER_BLOCKS_BEHIND: Joi.number()
    .integer()
    .min(0)
    .default(6),
  
  INDEXER_BATCH_SIZE: Joi.number()
    .integer()
    .min(1)
    .max(1000)
    .default(100),
  
  INDEXER_MAX_RETRIES: Joi.number()
    .integer()
    .min(1)
    .default(3),
  
  INDEXER_RETRY_DELAY: Joi.number()
    .integer()
    .min(1000)
    .default(5000),
  
  WEBSOCKET_TIMEOUT: Joi.number()
    .integer()
    .min(5000)
    .default(30000),
  
  CORRELATION_BUFFER_WINDOW_MS: Joi.number()
    .integer()
    .min(1000)
    .default(30000),
  
  CORRELATION_MAX_RETRIES: Joi.number()
    .integer()
    .min(1)
    .default(3),
  
  CORRELATION_TEMPORAL_WINDOW_MINUTES: Joi.number()
    .integer()
    .min(1)
    .default(10),
  
  CORRELATION_BLOCK_PROXIMITY_THRESHOLD: Joi.number()
    .integer()
    .min(1)
    .default(100),
});