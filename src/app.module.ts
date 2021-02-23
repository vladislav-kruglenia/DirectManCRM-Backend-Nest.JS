import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { ProcessOrderModule } from './ProcessOrder/processOrder.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUsersModule } from './Authentification/AuthUser/AuthUsers.module';
import { UsersModule } from './Authentification/Users/Users.module';
import { AppController } from './app.controller';


@Module({
  imports: [
    ProcessOrderModule,
    AuthModule,
    AuthUsersModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/DirectMan')
  ],
  controllers: [AppController]
})
export class AppModule {}
