import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogcontentDto } from './create-blogcontent.dto';

export class UpdateBlogcontentDto extends PartialType(CreateBlogcontentDto) {}
