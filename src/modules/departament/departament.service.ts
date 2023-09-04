import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartamentDto } from './dto/create-departament.dto';
import { UpdateDepartamentDto } from './dto/update-departament.dto';
import { Departament } from './model/departament.model';

@Injectable()
export class DepartamentService {
  constructor(
    @Inject('DEPARTAMENT_REPOSITORY')
    private readonly departamentRepository: typeof Departament,
  ) {}
  async create(createDepartamentDto: CreateDepartamentDto) {
    return await this.departamentRepository.create({ ...createDepartamentDto });
  }

  async findAll() {
    return await this.departamentRepository.findAll();
  }

  async findOne(id: number) {
    return await this.departamentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDepartamentDto: UpdateDepartamentDto) {
    return await this.departamentRepository.update(
      { ...updateDepartamentDto },
      { where: { id } },
    );
  }

  async remove(id: number) {
    const departament = await this.departamentRepository.findByPk(id);
    await departament.destroy();
    return departament;
  }
}
