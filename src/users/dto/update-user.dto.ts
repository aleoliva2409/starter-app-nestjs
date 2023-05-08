import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ROLES } from 'src/constants';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEnum(ROLES)
  @IsOptional()
  role?: ROLES;
}
