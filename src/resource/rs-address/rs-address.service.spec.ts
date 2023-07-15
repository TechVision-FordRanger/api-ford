import { Test, TestingModule } from '@nestjs/testing';
import { RsAddressService } from './rs-address.service';

describe('RsAddressService', () => {
  let service: RsAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsAddressService],
    }).compile();

    service = module.get<RsAddressService>(RsAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
