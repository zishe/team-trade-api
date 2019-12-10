import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            playground: process.env.NODE_ENV !== 'production',
            context: ({ req }) => ({ headers: req.headers }),
        }),
        ApiModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
