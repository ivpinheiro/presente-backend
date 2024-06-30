import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { ActivityRepository } from './repository/activities.repository';
import { Activity } from './schemas/activity.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'activity', schema: Activity }]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ActivityRepository],
})
export class ActivitiesModule {}
