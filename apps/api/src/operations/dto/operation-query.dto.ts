import { IsOptional, IsString, IsEnum, IsNumber, Min, Max } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { OperationType, OperationStatus } from 'shared-types';

export class OperationQueryDto {
  @ApiProperty({
    description: 'Filter operations by user address',
    required: false,
    example: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6'
  })
  @IsOptional()
  @IsString()
  user?: string;

  @ApiProperty({
    description: 'Filter operations by status',
    required: false,
    enum: OperationStatus,
    example: OperationStatus.ongoing
  })
  @IsOptional()
  @IsEnum(OperationStatus)
  status?: OperationStatus;

  @ApiProperty({
    description: 'Filter operations by type',
    required: false,
    enum: OperationType,
    example: OperationType.AddCollateral
  })
  @IsOptional()
  @IsEnum(OperationType)
  opType?: OperationType;

  @ApiProperty({
    description: 'Filter operations by source chain ID',
    required: false,
    example: 11155111
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  fromChain?: number;

  @ApiProperty({
    description: 'Filter operations by destination chain ID',
    required: false,
    example: 1
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  toChain?: number;

  @ApiProperty({
    description: 'Number of operations per page',
    required: false,
    minimum: 1,
    maximum: 100,
    default: 20,
    example: 20
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @ApiProperty({
    description: 'Cursor for pagination',
    required: false,
    example: 'op-123'
  })
  @IsOptional()
  @IsString()
  cursor?: string;
}

export class StreamQueryDto {
  @ApiProperty({
    description: 'User address to stream operations for',
    required: true,
    example: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6'
  })
  @IsString()
  user: string;
}