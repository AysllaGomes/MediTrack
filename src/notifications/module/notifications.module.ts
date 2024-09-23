import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';

import { NotificationsService } from '../services/notifications.service';

import { MedicinesModule } from '../../medicines/module/medicines.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),

    MedicinesModule,

    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'seu-email@gmail.com',
          pass: 'sua-senha',
        },
      },
    }),
  ],
  providers: [NotificationsService],
})
export class NotificationsModule {}
