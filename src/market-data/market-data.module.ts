import { Module } from '@nestjs/common';
import { MarketDataService } from './market-data.service';
import { MarketDataResolver } from './market-data.resolver';

@Module({
    providers: [MarketDataService, MarketDataResolver],
})
export class MarketDataModule {}
