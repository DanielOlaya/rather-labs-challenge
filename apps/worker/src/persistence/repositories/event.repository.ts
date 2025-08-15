import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Event, BufferStatus, Prisma } from 'prisma';

@Injectable()
export class EventRepository {
  constructor(private prisma: PrismaService) {}

  async findById(eventId: string): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { event_id: eventId },
    });
  }

  async findByTransaction(chainId: number, txHash: string): Promise<Event[]> {
    return this.prisma.event.findMany({
      where: {
        chain_id: chainId,
        tx_hash: {
          equals: txHash,
          mode: 'insensitive',
        },
      },
      orderBy: {
        log_index: 'asc',
      },
    });
  }

  async create(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data,
    });
  }

  async upsert(
    where: Prisma.EventWhereUniqueInput,
    create: Prisma.EventCreateInput,
    update: Prisma.EventUpdateInput,
  ): Promise<Event> {
    return this.prisma.event.upsert({
      where,
      create,
      update,
    });
  }

  async findBuffered(): Promise<Event[]> {
    return this.prisma.event.findMany({
      where: {
        buffer_status: BufferStatus.buffered,
      },
    });
  }

  async updateBufferStatus(eventId: string, bufferStatus: BufferStatus): Promise<Event> {
    return this.prisma.event.update({
      where: { event_id: eventId },
      data: { buffer_status: bufferStatus },
    });
  }

  async updateOperationId(eventId: string, operationId: string): Promise<Event> {
    return this.prisma.event.update({
      where: { event_id: eventId },
      data: { operation_id: operationId },
    });
  }
}