import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { POSITION_REPOSITORY } from 'src/core/constants';
import { Position } from './model/position.model';

@Injectable()
export class PositionService {
  constructor(
    @Inject(POSITION_REPOSITORY)
    private readonly positionRepository: typeof Position,
  ) {}
  async create(createPositionDto: CreatePositionDto) {
    return await this.positionRepository.create({ ...createPositionDto });
  }

  async findAll() {
    return await this.positionRepository.findAll();
  }

  async findOne(id: number) {
    return await this.positionRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePositionDto: UpdatePositionDto) {
    return await this.positionRepository.update(
      { ...updatePositionDto },
      { where: { id } },
    );
  }

  async remove(id: number) {
    const position = await this.positionRepository.findByPk(id);
    if (!position) {
      throw new NotFoundException('not found');
    }
    await position.destroy();
    return position;
  }
}
