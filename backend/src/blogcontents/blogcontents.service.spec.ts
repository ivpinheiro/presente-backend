import { Test, TestingModule } from '@nestjs/testing';
import { BlogcontentsService } from './blogcontents.service';

describe('BlogcontentsService', () => {
  let service: BlogcontentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogcontentsService],
    }).compile();

    service = module.get<BlogcontentsService>(BlogcontentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
