import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config';
import { ACCESS_LEVEL } from '../../constants/roles';
import { User } from './user.entity';
import { Project } from '../../projects/entities/project.entity';

@Entity({ name: 'users_projects' })
export class UsersProjects extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVEL })
  accessLevel: ACCESS_LEVEL;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

  @ManyToOne(() => Project, (project) => project.users)
  project: Project;
}
