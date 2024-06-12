import { Test, TestingModule } from '@nestjs/testing';
import { BlogcontentsController } from './blogcontents.controller';
import { BlogcontentsService } from './blogcontents.service';

describe('BlogcontentsController', () => {
  let controller: BlogcontentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogcontentsController],
      providers: [BlogcontentsService],
    }).compile();

    controller = module.get<BlogcontentsController>(BlogcontentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
