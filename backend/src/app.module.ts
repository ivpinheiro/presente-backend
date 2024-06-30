import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ActivitiesModule } from './activities/activities.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const DATABASE_URI =
  process.env.DEPLOY_CONFIG === 'production'
    ? process.env.DATABASE_URI
    : 'mongodb://presente-admin:123456@localhost:27017';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(DATABASE_URI),
    ActivitiesModule,
    PrismaModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}
