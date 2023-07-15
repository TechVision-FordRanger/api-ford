import { Test, TestingModule } from '@nestjs/testing';
import { RsPanelSymbolsService } from './rs-panel-symbols.service';

describe('RsPanelSymbolsService', () => {
  let service: RsPanelSymbolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsPanelSymbolsService],
    }).compile();

    service = module.get<RsPanelSymbolsService>(RsPanelSymbolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
