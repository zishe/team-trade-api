import { Test, TestingModule } from '@nestjs/testing';
import { MarketDataResolver } from './market-data.resolver';

describe('MarketDataResolver', () => {
    let resolver: MarketDataResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MarketDataResolver],
        }).compile();

        resolver = module.get<MarketDataResolver>(MarketDataResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
