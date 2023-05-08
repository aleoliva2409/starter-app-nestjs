import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from 'src/config';
import { User, UsersProjects } from './entities';
import { CreateUserDto, UpdateUserDto, AddProjectDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UsersProjects)
    private readonly usersProjectsRepository: Repository<UsersProjects>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async addProject(addProject: AddProjectDto) {
    try {
      return await this.usersProjectsRepository.save(addProject);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findAll() {
    try {
      return await this.userRepository.find({
        // relations: {
        //   projects: {
        //     project: true
        //   },
        // },
        // loadRelationIds: {
        //   relations: ['projects'],
        //   disableMixedMap: false
        // }
      });
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.projects', 'projects')
        .leftJoinAndSelect('projects.project', 'project')
        .getOne();

      if (!user)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'User does not exist',
        });

      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user: UpdateResult = await this.userRepository.update(
        id,
        updateUserDto,
      );

      if (user.affected === 0)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'User does not update successfully',
        });

      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  async remove(id: string) {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);

      if (user.affected === 0)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'User does not delete successfully',
        });

      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
