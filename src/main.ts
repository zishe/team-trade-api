import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { Logger, INestApplication } from '@nestjs/common';

import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    Logger.log(`server started on port ${port}`, 'Bootstrap');
}
bootstrap();
