import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import {DbModule} from "@libs/db";
import { MoController } from './users/mo/mo.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      DbModule,
      UsersModule
  ],
  controllers: [AdminController, MoController],
  providers: [AdminService],
})
export class AdminModule {}
