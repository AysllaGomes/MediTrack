import { IsBoolean, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsISO8601 } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  telefone: string;

  @IsISO8601()
  @IsNotEmpty()
  dataNascimento: Date;

  @IsBoolean()
  status: boolean;

  notify: {
    email: boolean;
    telefone: boolean;
  };
}
