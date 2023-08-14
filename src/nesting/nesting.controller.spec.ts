import { Test, TestingModule } from '@nestjs/testing';
import { NestingController } from './nesting.controller';

describe('NestingController', () => {
  let controller: NestingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestingController],
    }).compile();

    controller = module.get<NestingController>(NestingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
