import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MedicinesService } from '../services/medicines.service';

import { Medicine, MedicineSchema } from '../schema/medicine.schema';

import { MedicinesController } from '../controller/medicines.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Medicine.name, schema: MedicineSchema }
    ])
  ],
  controllers: [
    MedicinesController
  ],
  providers: [
    MedicinesService
  ],
  exports: [
    MedicinesService
  ],
})
export class MedicinesModule {}
