import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateAcitivityDto } from './dto/update-activity.dto';
import { ActivityRepository } from './repository/activities.repository';
import { Activity } from './interfaces/activities.interface';
import { User } from '../user/entities/user.entity';

@Injectable()
export class ActivitiesService {
  constructor(private readonly activityRepository: ActivityRepository) {}
  async create(createActivitieDto: CreateActivityDto): Promise<Activity> {
    return await this.activityRepository.createActivity(createActivitieDto);
  }

  async findAll(user: User): Promise<Activity[]> {
    const allActivities = await this.activityRepository.findAllActivities(user);
    if (!allActivities.length) {
      throw new BadRequestException('There is no activity content available');
    }
    return allActivities;
  }

  async findOne(id: string, user: User): Promise<Activity> {
    try {
      const activity = await this.activityRepository.findOneActivity(id, user);
      if (!activity) throw new BadRequestException('There are no results');
      return activity;
    } catch (error) {
      throw new BadRequestException('There are no results');
    }
  }

  async update(
    id: string,
    updateAcitivityDto: UpdateAcitivityDto,
    user: User,
  ): Promise<Activity> {
    try {
      const activity = await this.activityRepository.findOneActivity(id, user);
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

  async removeById(id: string, user: User): Promise<Activity> {
    try {
      const activity = await this.activityRepository.deleteActivityById(
        id,
        user,
      );
      if (!activity)
        throw new BadRequestException('This activity does not exists');
      return activity;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new Error('Communication error');
      }
    }
  }
}
