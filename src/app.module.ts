import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUsersModule } from './Authentification(no use)/AuthUser/AuthUsers.module';
import { UsersModule } from './Authentification(no use)/Users/Users.module';
import { AppController } from './app.controller';
import { TariffsEditingModule } from './TariffsEditing/TariffsEditing.module';


@Module({
  imports: [
    AuthModule,
    AuthUsersModule,
    UsersModule,
    TariffsEditingModule,
    MongooseModule.forRoot('mongodb://localhost:27017/DirectMan')
  ],
  controllers: [AppController]
})
export class AppModule {}
