import { Injectable } from '@nestjs/common';
import { CreateRsPanelSymbolDto } from './dto/create-rs-panel-symbol.dto';
import { UpdateRsPanelSymbolDto } from './dto/update-rs-panel-symbol.dto';

@Injectable()
export class RsPanelSymbolsService {
  create(createRsPanelSymbolDto: CreateRsPanelSymbolDto) {
    return 'This action adds a new rsPanelSymbol';
  }

  findAll() {
    return `This action returns all rsPanelSymbols`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rsPanelSymbol`;
  }

  update(id: number, updateRsPanelSymbolDto: UpdateRsPanelSymbolDto) {
    return `This action updates a #${id} rsPanelSymbol`;
  }

  remove(id: number) {
    return `This action removes a #${id} rsPanelSymbol`;
  }
}
