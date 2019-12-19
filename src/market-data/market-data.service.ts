import { Injectable } from '@nestjs/common';
import { Symbols } from '../shared/tickers';
import { SymbolDTO } from './symbol.dto';

@Injectable()
export class MarketDataService {
    search(fragment: string): SymbolDTO[] {
        const symbols = Symbols as SymbolDTO[];
        return symbols.filter(x => x.symbol.includes(fragment.toUpperCase())).slice(0, 10);
    }
}
