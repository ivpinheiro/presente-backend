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
  async findAll(): Promise<Activity[]> {
    return await this.activitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Activity> {
    return await this.activitiesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateAcitivityDto,
  ) {
    return await this.activitiesService.update(id, updateActivityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.activitiesService.removeById(id);
  }
}
