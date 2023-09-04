import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';

@Controller('proyect')
export class ProyectController {
  constructor(private readonly projectService: ProyectService) {}

  @Post()
  async create(@Body() createProyectDto: CreateProyectDto) {
    return await this.projectService.create(createProyectDto);
  }

  @Get()
  async findAll() {
    return await this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.projectService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProyectDto: UpdateProyectDto,
  ) {
    return await this.projectService.update(+id, updateProyectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.projectService.remove(+id);
  }
}
