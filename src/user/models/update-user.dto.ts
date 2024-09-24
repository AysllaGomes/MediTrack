import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  telefone: string;

  @IsBoolean()
  status: boolean;

  notify: {
    email: boolean;
    telefone: boolean;
  };
}
