import { Test, TestingModule } from '@nestjs/testing';
import { RsUserController } from './rs-user.controller';
import { RsUserService } from './rs-user.service';

describe('RsUserController', () => {
  let controller: RsUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RsUserController],
      providers: [RsUserService],
    }).compile();

    controller = module.get<RsUserController>(RsUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
