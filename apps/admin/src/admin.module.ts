import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {DbModule} from "@libs/db";
import { UsersController } from './users/users.controller
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      DbModule,
      UsersModule
  ],
  controllers: [AdminController, UsersController],
  providers: [AdminService],
})
export class AdminModule {}
