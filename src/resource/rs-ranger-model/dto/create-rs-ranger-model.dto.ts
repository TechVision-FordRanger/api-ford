import { IsNumber, IsString } from 'class-validator';

export class CreateRsRangerModelDto {
  @IsString()
  modelYear: string;

  @IsString()
  model: string;

  @IsNumber()
  consume: number;

  @IsString()
  rangerManual: string;
}
