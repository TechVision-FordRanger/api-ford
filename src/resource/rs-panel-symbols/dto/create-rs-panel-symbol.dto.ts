import { IsString } from 'class-validator';

export class CreateRsPanelSymbolDto {
  @IsString()
  lightName: string;

  @IsString()
  description: string;

  @IsString()
  imgUrl: string;
}
