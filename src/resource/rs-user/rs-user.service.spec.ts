import { Test, TestingModule } from '@nestjs/testing';
import { RsUserService } from './rs-user.service';

describe('RsUserService', () => {
  let service: RsUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsUserService],
    }).compile();

    service = module.get<RsUserService>(RsUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
