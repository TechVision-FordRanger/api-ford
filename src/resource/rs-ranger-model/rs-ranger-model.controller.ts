import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RsRangerModelService } from './rs-ranger-model.service';
import { CreateRsRangerModelDto } from './dto/create-rs-ranger-model.dto';
import { UpdateRsRangerModelDto } from './dto/update-rs-ranger-model.dto';

@Controller('rs-ranger-model')
export class RsRangerModelController {
  constructor(private readonly rsRangerModelService: RsRangerModelService) {}

  @Post()
  create(@Body() createRsRangerModelDto: CreateRsRangerModelDto) {
    return this.rsRangerModelService.create(createRsRangerModelDto);
  }

  @Get()
  findAll() {
    return this.rsRangerModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rsRangerModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRsRangerModelDto: UpdateRsRangerModelDto) {
    return this.rsRangerModelService.update(+id, updateRsRangerModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rsRangerModelService.remove(+id);
  }
}
