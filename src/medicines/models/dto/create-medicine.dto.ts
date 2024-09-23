import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateMedicineDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome do medicamento é obrigatório' })
  name: string;

  @IsNumber()
  @Min(0, { message: 'A quantidade deve ser um número positivo' })
  quantity: number;

  @IsNumber()
  @Min(0, { message: 'A quantidade mínima deve ser um número positivo' })
  minQuantity: number;
}
