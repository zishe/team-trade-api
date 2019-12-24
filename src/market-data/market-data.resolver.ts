import { Resolver, Query, Args } from '@nestjs/graphql';
import { MarketDataService } from './market-data.service';
import { SymbolDTO } from './symbol.dto';

@Resolver('MarketData')
export class MarketDataResolver {
    constructor(private marketDataService: MarketDataService) {}

    @Query()
    search(@Args('fragment') fragment: string): SymbolDTO[] {
        return this.marketDataService.search(fragment);
    }
}
