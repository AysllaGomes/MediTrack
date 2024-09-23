import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from '../services/app.service';

import { AppController } from '../controllers/app.controller';

import { MedicinesModule } from '../../medicines/module/medicines.module';
import { NotificationsModule } from '../../notifications/module/notifications.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/medireminder'),
    MedicinesModule,
    NotificationsModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
