import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRsUserDto {
  @IsString()
  @IsOptional()
  uuid: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  celphone: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  idRangerModel: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  renavam: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  rangerColor: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  rangerNickname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  rangerPlate: string;

  @ApiProperty()
  @IsString()
  birthDate: string;
}
