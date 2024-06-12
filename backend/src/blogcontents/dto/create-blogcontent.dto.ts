import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
  IsArray,
  ArrayMinSize,
  IsEmail,
} from 'class-validator';

export class CreateBlogcontentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(300)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly author: string;

  @IsNotEmpty()
  @IsEmail()
  readonly authorEmail: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(500)
  readonly urlTitle: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(1000)
  readonly contentSummary: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @IsDateString()
  readonly publicationDate: Date;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @IsDateString()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @IsDateString()
  readonly updatedAt: Date;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly category: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  readonly keywords: [string];

  @IsString()
  @MinLength(2)
  readonly coverImage: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly language: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly readingTime: string;
}
