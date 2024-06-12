import { Module } from '@nestjs/common';
import { BlogcontentsService } from './blogcontents.service';
import { BlogcontentsController } from './blogcontents.controller';
import { BlogcontentRepository } from './repository/blogcontents.repository';
import { BlogContent } from './schemas/blogcontent.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'blogcontent', schema: BlogContent }]),
  ],
  controllers: [BlogcontentsController],
  providers: [BlogcontentsService, BlogcontentRepository],
})
export class BlogcontentsModule {}
