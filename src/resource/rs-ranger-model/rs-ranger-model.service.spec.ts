import { Test, TestingModule } from '@nestjs/testing';
import { RsRangerModelService } from './rs-ranger-model.service';

describe('RsRangerModelService', () => {
  let service: RsRangerModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsRangerModelService],
    }).compile();

    service = module.get<RsRangerModelService>(RsRangerModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
