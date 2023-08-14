import { Test, TestingModule } from '@nestjs/testing';
import { NestingService } from './nesting.service';

describe('NestingService', () => {
  let service: NestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestingService],
    }).compile();

    service = module.get<NestingService>(NestingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
