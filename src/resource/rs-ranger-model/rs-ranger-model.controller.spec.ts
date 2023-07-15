import { Test, TestingModule } from '@nestjs/testing';
import { RsRangerModelController } from './rs-ranger-model.controller';
import { RsRangerModelService } from './rs-ranger-model.service';

describe('RsRangerModelController', () => {
  let controller: RsRangerModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RsRangerModelController],
      providers: [RsRangerModelService],
    }).compile();

    controller = module.get<RsRangerModelController>(RsRangerModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
