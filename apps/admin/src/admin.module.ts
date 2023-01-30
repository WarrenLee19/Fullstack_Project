import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {DbModule} from "@libs/db";
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [
      DbModule,
      UsersModule,
      CoursesModule,
      EpisodesModule
  ],
  controllers: [AdminController, UsersController],
  providers: [AdminService],
})
export class AdminModule {}
