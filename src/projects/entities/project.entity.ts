import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { IProject } from '../interfaces/project.interface';

@Entity({ name: 'projects' })
export class Project extends BaseEntity implements IProject {
  @Column()
  name: string;

  @Column()
  description: string;
}
