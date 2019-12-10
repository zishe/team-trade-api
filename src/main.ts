import 'dotenv/config';

import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());

    app.enableCors({
        origin: [
            'http://localhost:4200', // angular
            'http://localhost:3000', // react
            'http://localhost:8081', // react-native
        ],
    });

    await app.listen(port);
    Logger.log(`Server started at http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
