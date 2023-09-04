import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { Proyect } from './model/proyect.model';

@Injectable()
export class ProyectService {
  constructor(
    @Inject('PROJECT_REPOSITORY')
    private readonly projectRepository: typeof Proyect,
  ) {}
  async create(createProyectDto: CreateProyectDto) {
    const newProject = await this.projectRepository.create({
      ...createProyectDto,
    });
    return newProject;
  }

  async findAll() {
    return await this.projectRepository.findAll();
  }

  async findOne(id: number) {
    return await this.projectRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProyectDto: UpdateProyectDto) {
    return await this.projectRepository.update(
      { ...updateProyectDto },
      { where: { id } },
    );
  }

  async remove(id: number) {
    const project = await this.projectRepository.findByPk(id);

    if (!project) {
      throw new NotFoundException('The project does not exist');
    }

    // Utiliza el método destroy para eliminar lógicamente el proyecto
    await project.destroy();

    return project;
  }
}
