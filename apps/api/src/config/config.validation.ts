import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  
  PORT: Joi.number()
    .port()
    .default(3000),
  
  DATABASE_URL: Joi.string()
    .uri()
    .required(),
  
  REDIS_URL: Joi.string()
    .uri()
    .default('redis://localhost:6379'),
  
  CORS_ORIGINS: Joi.string()
    .default('http://localhost:3001'),
  
  RATE_LIMIT_TTL: Joi.number()
    .integer()
    .min(1)
    .default(60),
  
  RATE_LIMIT_MAX: Joi.number()
    .integer()
    .min(1)
    .default(100),
  
  CHAINS_CONFIG_PATH: Joi.string()
    .default('./config/chains.json'),
  
  CONTRACTS_CONFIG_PATH: Joi.string()
    .default('./config/contracts.json'),
});