import {
  IsString,
  IsEnum,
  IsNumber,
  IsEmail,
} from 'class-validator';
import { ROLES } from 'src/constants';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEnum(ROLES)
  role: ROLES;
}
