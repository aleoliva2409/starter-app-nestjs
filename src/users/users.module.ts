import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UsersProjects } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersProjects])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
