import { IsString, IsInt, Length, Min, Max } from 'class-validator';

export class CreateClienteDto {
  @IsInt()
  readonly id: number;

  @IsString()
  @Length(3, 20)
  readonly nome: string;

  @IsInt()
  @Min(0)
  @Max(99)
  readonly idade: number;

  @IsString()
  readonly sexo: string;
}