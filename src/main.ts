import 'dotenv/config';

import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as expressListRoutes from 'express-list-routes';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());

    const options = new DocumentBuilder()
        .setTitle('TeamTrade API')
        .setVersion('0.0.1')
        .setBasePath('api/')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swg', app, document);

    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);

    await app.listen(port);
    Logger.log(`Server started at http://localhost:${port}/${globalPrefix}`, 'Bootstrap');

    const router = app.getHttpServer()?._events?.request?._router;
    Logger.log(expressListRoutes({}, 'API:', router), 'Routes');
}
bootstrap();
