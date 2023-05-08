import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IProject } from '../interfaces/project.interface';
import { UsersProjects } from 'src/users/entities/user-project.entity';

@Entity({ name: 'projects' })
export class Project extends BaseEntity implements IProject {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => UsersProjects, (usersProjects) => usersProjects.project)
  usersProjects: UsersProjects[];
}
