import { Model } from 'mongoose';

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../../schemas/user.schema';

import { CreateUserDto } from '../models/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verifica duplicidade antes de tentar salvar
    await this.checkForDuplicate(createUserDto);

    const createdUser = new this.userModel(createUserDto);

    try {
      return await createdUser.save();
    } catch (error) {
      throw new BadRequestException('Erro ao criar o usuário');
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: any): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  private async checkForDuplicate(createUserDto: CreateUserDto): Promise<void> {
    const { cpf, email } = createUserDto;

    const existingUser = await this.userModel.findOne({
      $or: [{ cpf }, { email }],
    });

    if (existingUser) {
      const duplicateField = existingUser.cpf === cpf ? 'CPF' : 'e-mail';
      throw new BadRequestException(`${duplicateField} já está em uso`);
    }
  }
}
