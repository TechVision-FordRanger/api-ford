import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RsUserService } from './rs-user.service';
import { CreateRsUserDto } from './dto/create-rs-user.dto';
import { UpdateRsUserDto } from './dto/update-rs-user.dto';

@Controller('rs-user')
export class RsUserController {
  constructor(private readonly rsUserService: RsUserService) {}

  @Post()
  create(@Body() createRsUserDto: CreateRsUserDto) {
    return this.rsUserService.create(createRsUserDto);
  }

  @Get()
  findAll() {
    return this.rsUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rsUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRsUserDto: UpdateRsUserDto) {
    return this.rsUserService.update(+id, updateRsUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rsUserService.remove(+id);
  }
}
