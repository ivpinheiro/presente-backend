import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
  IsArray,
  ArrayMinSize,
  IsEmail,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ActivityTime {
  @IsNotEmpty()
  @IsString()
  readonly start: string;

  @IsNotEmpty()
  @IsString()
  readonly end: string;
}

class Activity {
  @IsNotEmpty()
  @IsString()
  readonly dayWeek: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ActivityTime)
  readonly activityTime: ActivityTime[];
}

export class CreateActivityDto {
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
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Activity)
  readonly activitiesWeek: Activity[];

  @IsNotEmpty()
  @IsDateString()
  readonly startDate: string;

  @IsNotEmpty()
  @IsDateString()
  readonly endDate: string;

  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: string;

  @IsNotEmpty()
  @IsDateString()
  readonly updatedAt: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly category: string;
}
