import { Column, Entity } from 'typeorm';
import { IUser } from '../interfaces/user.interface';
import { ROLES } from '../../constants';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;
}
