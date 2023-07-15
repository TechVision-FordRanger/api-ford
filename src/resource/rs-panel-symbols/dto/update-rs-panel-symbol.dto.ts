import { PartialType } from '@nestjs/mapped-types';
import { CreateRsPanelSymbolDto } from './create-rs-panel-symbol.dto';

export class UpdateRsPanelSymbolDto extends PartialType(CreateRsPanelSymbolDto) {}
