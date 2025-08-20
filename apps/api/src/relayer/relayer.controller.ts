import { 
  Controller, 
  Post, 
  Body, 
  Param, 
  ValidationPipe, 
  UseGuards,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiBody, 
  ApiOkResponse, 
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse
} from '@nestjs/swagger';
import { RelayerService } from './relayer.service';
import { RelayerMessageDto, ChainIdParamDto } from './dto/relayer.dto';
import { 
  SuccessResponseSchema, 
  ErrorResponseSchema 
} from '../schemas/api-schemas';

@ApiTags('relayer')
@Controller('relayer')
// @UseGuards(ThrottlerGuard)
export class RelayerController {
  constructor(private readonly relayerService: RelayerService) {}

  @Post('relay/:chainId')
  @ApiOperation({ 
    summary: 'Relay cross-chain message',
    description: 'Relay a cross-chain message to the specified blockchain network'
  })
  @ApiParam({ 
    name: 'chainId', 
    description: 'Target chain ID for message relay',
    example: '11155111'
  })
  @ApiBody({ 
    type: RelayerMessageDto,
    description: 'Cross-chain message data to be relayed'
  })
  @ApiOkResponse({ 
    description: 'Message relayed successfully',
    schema: {
      type: 'object',
      properties: {
        success: { type: 'boolean', example: true },
        transactionHash: { type: 'string', description: 'Transaction hash of the relay operation' },
        messageId: { type: 'string', description: 'ID of the relayed message' },
        targetChain: { type: 'number', description: 'Target chain ID' }
      }
    }
  })
  @ApiBadRequestResponse({ 
    description: 'Invalid chain ID or message data',
    schema: { $ref: '#/components/schemas/ErrorResponseSchema' }
  })
  @ApiInternalServerErrorResponse({ 
    description: 'Failed to relay message',
    schema: { $ref: '#/components/schemas/ErrorResponseSchema' }
  })
  async relayMessage(
    @Param(ValidationPipe) params: ChainIdParamDto,
    @Body(ValidationPipe) message: RelayerMessageDto
  ) {
    try {
      const chainIdNum = parseInt(params.chainId, 10);
      if (isNaN(chainIdNum)) {
        throw new HttpException('Invalid chain ID', HttpStatus.BAD_REQUEST);
      }

      const txHash = await this.relayerService.relayMessage(message, chainIdNum);
      
      return {
        success: true,
        transactionHash: txHash,
        messageId: message.messageId,
        targetChain: chainIdNum
      };
    } catch (error) {
      throw new HttpException(
        `Failed to relay message: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
