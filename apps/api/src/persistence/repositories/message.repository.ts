import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Message, MessageStatus, Prisma } from 'prisma';
import { Decimal } from 'decimal.js';

@Injectable()
export class MessageRepository {
  constructor(private prisma: PrismaService) {}

  async findById(messageId: string): Promise<Message | null> {
    return this.prisma.message.findUnique({
      where: { message_id: messageId },
    });
  }

  async findByNonce(nonce: Decimal, fromChain: number, toChain: number): Promise<Message | null> {
    return this.prisma.message.findFirst({
      where: {
        nonce,
        from_chain: fromChain,
        to_chain: toChain,
      },
    });
  }

  async create(data: Prisma.MessageCreateInput): Promise<Message> {
    return this.prisma.message.create({
      data,
    });
  }

  async update(messageId: string, data: Prisma.MessageUpdateInput): Promise<Message> {
    return this.prisma.message.update({
      where: {message_id: messageId },
      data,
    });
  }

  async upsert(
    where: Prisma.MessageWhereUniqueInput,
    create: Prisma.MessageCreateInput,
    update: Prisma.MessageUpdateInput,
  ): Promise<Message> {
    return this.prisma.message.upsert({
      where,
      create,
      update,
    });
  }

  async updateStatus(messageId: string, status: MessageStatus, receivedAt?: Date): Promise<Message> {
    const updateData: Prisma.MessageUpdateInput = { status };
    if (receivedAt) {
      updateData.received_at = receivedAt;
    }
    
    return this.prisma.message.update({
      where: { message_id: messageId },
      data: updateData,
    });
  }

  async findPendingMessages(olderThanMinutes: number = 30): Promise<Message[]> {
    const threshold = new Date(Date.now() - olderThanMinutes * 60 * 1000);
    
    return this.prisma.message.findMany({
      where: {
        status: MessageStatus.sent,
        sent_at: {
          lt: threshold,
        },
      },
    });
  }
}