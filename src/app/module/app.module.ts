import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from '../services/app.service';

import { environment } from '../../config/environment';

import { AppController } from '../controllers/app.controller';

import { UserModule } from '../../user/module/user.module';
import { MedicinesModule } from '../../medicines/module/medicines.module';
import { NotificationsModule } from '../../notifications/module/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      environment.db.uri
    ),
    MedicinesModule,
    NotificationsModule,
    UserModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
