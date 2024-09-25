import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';

import { UserService } from '../service/user.service';

import { CreateUserDto } from '../models/create-user.dto';
import { UpdateUserDto } from '../models/update-user.dto';

import { ValidateObjectIdPipe } from '../../shared/pipes/ValidateObjectId.pipe';
import { User } from '../../schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ValidateObjectIdPipe) id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id', ValidateObjectIdPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
}
