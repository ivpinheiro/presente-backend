import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blogcontent } from '../interfaces/blogcontents.interface';
import { CreateBlogcontentDto } from '../dto/create-blogcontent.dto';
import { UpdateBlogcontentDto } from '../dto/update-blogcontent.dto';

@Injectable()
export class BlogcontentRepository {
  constructor(
    @InjectModel('blogcontent')
    private readonly blogContentModel: Model<Blogcontent>,
  ) {}

  async createBlogContent(
    newBlogContent: CreateBlogcontentDto,
  ): Promise<Blogcontent> {
    const blogContentCreated =
      await this.blogContentModel.create(newBlogContent);
    return blogContentCreated;
  }

  async findAllBlogContents(): Promise<Blogcontent[]> {
    return await this.blogContentModel
      .find({}, { __v: false })
      .sort({ title: +1 })
      .exec();
  }

  async findOneBlogContent(idContent: string): Promise<Blogcontent> {
    return await this.blogContentModel.findOne(
      { _id: idContent },
      { __v: false },
    );
  }

  async deleteBlogContentById(idContent: string): Promise<Blogcontent> {
    return await this.blogContentModel.findOneAndDelete(
      { _id: idContent },
      { __v: false },
    );
  }

  async updateBlogContentById(
    idContent: string,
    blogContent: UpdateBlogcontentDto,
  ): Promise<Blogcontent> {
    return await this.blogContentModel.findByIdAndUpdate(
      { _id: idContent },
      blogContent,
      { new: true },
    );
  }
}
