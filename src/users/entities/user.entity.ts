import { BaseEntity, Column, Entity } from 'typeorm';
import { IUser } from '../interfaces/user.interface';
import { ROLES } from '../../constants';

@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
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
