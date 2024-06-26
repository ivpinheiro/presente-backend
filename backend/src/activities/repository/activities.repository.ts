import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from '../interfaces/activities.interface';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { UpdateAcitivityDto } from '../dto/update-activity.dto';
import { User } from '../../user/entities/user.entity';

@Injectable()
export class ActivityRepository {
  constructor(
    @InjectModel('activity')
    private readonly activityModel: Model<Activity>,
  ) {}

  async createActivity(newActivity: CreateActivityDto): Promise<Activity> {
    const activityCreated = await this.activityModel.create(newActivity);
    return activityCreated;
  }

  async findAllActivities(user: User): Promise<Activity[]> {
    return await this.activityModel
      .find({ authorEmail: user.email }, { __v: false })
      .sort({ title: +1 })
      .exec();
  }

  async findOneActivity(idContent: string, user: User): Promise<Activity> {
    return await this.activityModel.findOne(
      { _id: idContent, authorEmail: user.email },
      { __v: false },
    );
  }

  async deleteActivityById(idContent: string, user: User): Promise<Activity> {
    if (!user || !user.email) {
      throw new Error('User information is incomplete');
    }
    return await this.activityModel.findOneAndDelete(
      { _id: idContent, authorEmail: user.email },
      { __v: false },
    );
  }

  async updateActivityById(
    idContent: string,
    activity: UpdateAcitivityDto,
  ): Promise<Activity> {
    return await this.activityModel.findByIdAndUpdate(
      { _id: idContent },
      activity,
      { new: true },
    );
  }
}
