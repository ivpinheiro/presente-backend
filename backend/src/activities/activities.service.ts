import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateAcitivityDto } from './dto/update-activity.dto';
import { ActivityRepository } from './repository/activities.repository';
import { Activity } from './interfaces/activities.interface';

@Injectable()
export class ActivitiesService {
  constructor(private readonly activityRepository: ActivityRepository) {}
  async create(createActivitieDto: CreateActivityDto): Promise<Activity> {
    return await this.activityRepository.createActivity(createActivitieDto);
  }

  async findAll(): Promise<Activity[]> {
    const allActivities = await this.activityRepository.findAllActivities();
    if (!allActivities.length) {
      throw new BadRequestException('There is no activity content available');
    }
    return allActivities;
  }

  async findOne(id: string): Promise<Activity> {
    try {
      const activity = await this.activityRepository.findOneActivity(id);
      if (!activity) throw new BadRequestException('There are no results');
      return activity;
    } catch (error) {
      throw new BadRequestException('There are no results');
    }
  }

  async update(
    id: string,
    updateAcitivityDto: UpdateAcitivityDto,
  ): Promise<Activity> {
    try {
      const activity = await this.activityRepository.findOneActivity(id);
      if (!activity) throw new BadRequestException('There are no results');
      const activityUpdated = await this.activityRepository.updateActivityById(
        id,
        updateAcitivityDto,
      );
      return activityUpdated;
    } catch (error) {
      throw new BadRequestException('There are no results');
    }
  }

  async removeById(id: string): Promise<Activity> {
    try {
      return await this.activityRepository.deleteActivityById(id);
    } catch (error) {
      throw new BadRequestException('This activity does not exists');
    }
  }
}
