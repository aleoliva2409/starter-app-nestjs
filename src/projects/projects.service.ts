import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from 'src/config';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      return await this.projectRepository.save(createProjectDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findAll() {
    try {
      return await this.projectRepository.find();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const project = await this.projectRepository
        .createQueryBuilder('project')
        .where({ id })
        .leftJoinAndSelect('project.users', 'users') // ? 'users' es el alias para llamarlo en la linea siguiente
        .leftJoinAndSelect('users.user', 'user')
        .getOne();

      if (!project)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Project does not exist',
        });

      return project;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    try {
      const project: UpdateResult = await this.projectRepository.update(
        id,
        updateProjectDto,
      );

      if (project.affected === 0)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Project does not update successfully',
        });

      return project;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async remove(id: string) {
    try {
      const project: DeleteResult = await this.projectRepository.delete(id);

      if (project.affected === 0)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Project does not delete successfully',
        });

      return project;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
