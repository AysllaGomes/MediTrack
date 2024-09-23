import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Cron, CronExpression } from '@nestjs/schedule';

import { MedicinesService } from '../../medicines/services/medicines.service';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly medicinesService: MedicinesService,
    private readonly mailerService: MailerService
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_9AM)
  async checkMedicines() {
    const medicines = await this.medicinesService.findAll();
    const lowStockMedicines = medicines.filter(med => med.quantity <= med.minQuantity);

    if (lowStockMedicines.length > 0) {
      const message = `Atenção! O(s) seguinte(s) medicamento(s) está(ão) acabando: ${lowStockMedicines.map(m => m.name).join(', ')}`;
      await this.mailerService.sendMail({
        to: 'user@example.com',
        subject: 'Alerta de medicamentos',
        text: message,
      });
    }
  }
}
