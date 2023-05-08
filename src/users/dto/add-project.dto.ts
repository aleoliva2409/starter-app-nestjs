import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ACCESS_LEVEL } from 'src/constants';
import { User } from '../entities/user.entity';
import { Project } from 'src/projects/entities/project.entity';

export class AddProjectDto {
  @IsEnum(ACCESS_LEVEL)
  accessLevel: ACCESS_LEVEL;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  user: User;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  project: Project;
}
