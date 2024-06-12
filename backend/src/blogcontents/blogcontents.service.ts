import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBlogcontentDto } from './dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from './dto/update-blogcontent.dto';
import { BlogcontentRepository } from './repository/blogcontents.repository';
import { Blogcontent } from './interfaces/blogcontents.interface';

@Injectable()
export class BlogcontentsService {
  constructor(private readonly blogcontentRepository: BlogcontentRepository) {}
  async create(
    createBlogcontentDto: CreateBlogcontentDto,
  ): Promise<Blogcontent> {
    return await this.blogcontentRepository.createBlogContent(
      createBlogcontentDto,
    );
  }

  async findAll(): Promise<Blogcontent[]> {
    const allBlogContents =
      await this.blogcontentRepository.findAllBlogContents();
    if (!allBlogContents.length) {
      throw new BadRequestException('There is no blog content available');
    }
    return allBlogContents;
  }

  async findOne(id: string): Promise<Blogcontent> {
    try {
      const blogContent =
        await this.blogcontentRepository.findOneBlogContent(id);
      if (!blogContent) throw new BadRequestException('There are no results');
      return blogContent;
    } catch (error) {
      throw new BadRequestException('There are no results');
    }
  }

  async update(
    id: string,
    updateBlogcontentDto: UpdateBlogcontentDto,
  ): Promise<Blogcontent> {
    try {
      const blogContent =
        await this.blogcontentRepository.findOneBlogContent(id);
      if (!blogContent) throw new BadRequestException('There are no results');
      const blogContentUpdated =
        await this.blogcontentRepository.updateBlogContentById(
          id,
          updateBlogcontentDto,
        );
      return blogContentUpdated;
    } catch (error) {
      throw new BadRequestException('There are no results');
    }
  }

  async removeById(id: string): Promise<Blogcontent> {
    try {
      return await this.blogcontentRepository.deleteBlogContentById(id);
    } catch (error) {
      throw new BadRequestException('This Blog Content does not exists');
    }
  }
}
