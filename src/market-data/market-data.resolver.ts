import { Resolver, Query, Args } from '@nestjs/graphql';
import { MarketDataService } from './market-data.service';
import { SymbolDTO } from './symbol.dto';
import { HistoricalPrice } from 'iex-cloud';

@Resolver('MarketData')
export class MarketDataResolver {
    constructor(private marketDataService: MarketDataService) {}

    @Query()
    search(@Args('fragment') fragment: string): SymbolDTO[] {
        return this.marketDataService.search(fragment);
    }

    @Query()
    async chart(@Args('symbol') symbol: string): Promise<ReadonlyArray<Partial<HistoricalPrice>>> {
        const result = await this.marketDataService.chart(symbol);
        return result;
    }
}
