import { Injectable } from '@nestjs/common';
import { historicalPrices, HistoricalPrice } from 'iex-cloud';

import { Symbols } from '../shared/tickers';
import { SymbolDTO } from './symbol.dto';

@Injectable()
export class MarketDataService {
    search(fragment: string): SymbolDTO[] {
        const symbols = Symbols as SymbolDTO[];
        return symbols.filter(x => x.symbol.includes(fragment.toUpperCase())).slice(0, 10);
    }

    async chart(ticker: string): Promise<ReadonlyArray<Partial<HistoricalPrice>>> {
        // console.log(ticker);

        return await historicalPrices(ticker, '5d');
    }
}
