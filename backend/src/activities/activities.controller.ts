import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateAcitivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '../user/entities/user.entity';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  async create(
    @Body() createActivityDto: CreateActivityDto,
  ): Promise<Activity> {
    return await this.activitiesService.create(createActivityDto);
  }

  @Get()
  async findAll(@CurrentUser() user: User): Promise<Activity[]> {
    return await this.activitiesService.findAll(user);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Activity> {
    return await this.activitiesService.findOne(id, user);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateAcitivityDto,
    @CurrentUser() user: User,
  ) {
    return await this.activitiesService.update(id, updateActivityDto, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: User) {
    return await this.activitiesService.removeById(id, user);
  }
}
