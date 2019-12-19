import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { UserModule } from './user/user.module';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { MarketDataModule } from './market-data/market-data.module';

@Module({
    imports: [UserModule, AuthModule, CoreModule, MarketDataModule],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
    ],
    exports: [UserModule],
})
export class ApiModule {}
