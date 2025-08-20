import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiOkResponse 
} from '@nestjs/swagger';
import { HealthService } from './health.service';
import { 
  HealthResponseSchema, 
  ChainHealthSchema 
} from '../schemas/api-schemas';

@ApiTags('health')
@Controller('health')
// TODO: Setup and use guard fro rate limiting
// @UseGuards(ThrottlerGuard)
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  @ApiOperation({ 
    summary: 'Get overall system health',
    description: 'Check the overall health status of the cross-chain lending protocol system'
  })
  @ApiOkResponse({ 
    description: 'System health status retrieved successfully',
    schema: { $ref: '#/components/schemas/HealthResponseSchema' }
  })
  async getOverallHealth() {
    return this.healthService.getOverallHealth();
  }

  @Get('chains')
  @ApiOperation({ 
    summary: 'Get all chains health status',
    description: 'Retrieve health status for all supported blockchain chains'
  })
  @ApiOkResponse({ 
    description: 'Chains health status retrieved successfully',
    schema: {
      type: 'array',
      items: { $ref: '#/components/schemas/ChainHealthSchema' }
    }
  })
  async getChainsHealth() {
    return this.healthService.getChainsHealth();
  }

  @Get('chains/:chainId')
  @ApiOperation({ 
    summary: 'Get specific chain health status',
    description: 'Check the health status of a specific blockchain chain by ID'
  })
  @ApiParam({ name: 'chainId', description: 'Chain ID (e.g., 1 for Ethereum, 11155111 for Sepolia)' })
  @ApiOkResponse({ 
    description: 'Chain health status retrieved successfully',
    schema: { $ref: '#/components/schemas/ChainHealthSchema' }
  })
  async getChainStatus(@Param('chainId', ParseIntPipe) chainId: number) {
    return this.healthService.getChainStatus(chainId);
  }
}