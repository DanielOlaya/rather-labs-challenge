import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { HealthService } from './health.service';

@Controller('health')
// TODO: Setup and use guard fro rate limiting
// @UseGuards(ThrottlerGuard)
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  async getOverallHealth() {
    return this.healthService.getOverallHealth();
  }

  @Get('chains')
  async getChainsHealth() {
    return this.healthService.getChainsHealth();
  }

  @Get('chains/:chainId')
  async getChainStatus(@Param('chainId', ParseIntPipe) chainId: number) {
    return this.healthService.getChainStatus(chainId);
  }
}