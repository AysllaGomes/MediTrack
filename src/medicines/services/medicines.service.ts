import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Medicine } from '../../schemas/medicine.schema';

import { UpdateMedicineDto } from '../models/dto/update-medicine.dto';
import { CreateMedicineDto } from '../models/dto/create-medicine.dto';

@Injectable()
export class MedicinesService {
  constructor(@InjectModel(Medicine.name) private medicineModel: Model<Medicine>) {}

  async create(createMedicineDto: CreateMedicineDto): Promise<Medicine> {
    const createdMedicine = new this.medicineModel(createMedicineDto);
    return createdMedicine.save();
  }

  async findAll(): Promise<Medicine[]> {
    return this.medicineModel.find().exec();
  }

  async update(id: string, updateMedicineDto: UpdateMedicineDto): Promise<Medicine> {
    return this.medicineModel.findByIdAndUpdate(id, updateMedicineDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.medicineModel.findByIdAndDelete(id).exec();
  }
}
