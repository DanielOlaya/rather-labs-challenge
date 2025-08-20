import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Cross-Chain Lending Protocol API')
    .setDescription('API for the Cross-Chain Lending Protocol - Rather Labs Challenge')
    .setVersion('1.0')
    .addTag('operations', 'Cross-chain lending operations')
    .addTag('health', 'Health check endpoints')
    .addTag('queue', 'Queue management endpoints')
    .addTag('relayer', 'Relayer endpoints')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  
  app.enableCors({
    // enable all origins for now
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
