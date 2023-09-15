import { IsNumber, IsString } from 'class-validator';

export class CreateRsAddressDto {
  @IsString()
  zipCode: string;

  @IsString()
  streetName: string;

  @IsString()
  number: number;

  @IsString()
  complement: string;

  @IsString()
  city: string;

  @IsString()
  uf: string;

  @IsNumber()
  idUser: number;
}
