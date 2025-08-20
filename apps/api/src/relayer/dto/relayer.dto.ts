import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RelayerMessageDto {
  @ApiProperty({
    description: 'Unique nonce for the cross-chain message',
    example: 42,
    minimum: 0
  })
  @IsNumber()
  @IsNotEmpty()
  nonce: number;

  @ApiProperty({
    description: 'Source chain ID where the message originates',
    example: 11155111
  })
  @IsNumber()
  @IsNotEmpty()
  fromChain: number;

  @ApiProperty({
    description: 'Address of the message sender',
    example: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6'
  })
  @IsString()
  @IsNotEmpty()
  sender: string;

  @ApiProperty({
    description: 'Address of the message recipient',
    example: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6'
  })
  @IsString()
  @IsNotEmpty()
  recipient: string;

  @ApiProperty({
    description: 'Encoded message data for cross-chain operation',
    example: '0x1234567890abcdef...'
  })
  @IsString()
  @IsNotEmpty()
  data: string;

  @ApiProperty({
    description: 'Unique identifier for the cross-chain message',
    example: 'msg-123456789'
  })
  @IsString()
  @IsNotEmpty()
  messageId: string;
}

export class ChainIdParamDto {
  @ApiProperty({
    description: 'Target chain ID for message relay',
    example: '11155111'
  })
  @IsString()
  @IsNotEmpty()
  chainId: string;
}
