import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartamentService } from './departament.service';
import { CreateDepartamentDto } from './dto/create-departament.dto';
import { UpdateDepartamentDto } from './dto/update-departament.dto';

@Controller('departament')
export class DepartamentController {
  constructor(private readonly departamentService: DepartamentService) {}

  @Post()
  async create(@Body() createDepartamentDto: CreateDepartamentDto) {
    return this.departamentService.create(createDepartamentDto);
  }

  @Get()
  async findAll() {
    return await this.departamentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.departamentService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDepartamentDto: UpdateDepartamentDto,
  ) {
    return await this.departamentService.update(+id, updateDepartamentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.departamentService.remove(+id);
  }
}
