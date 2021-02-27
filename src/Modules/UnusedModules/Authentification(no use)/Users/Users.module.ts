import { Module } from '@nestjs/common';
import { UsersService } from './Users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {

}