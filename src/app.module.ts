import { Module } from '@nestjs/common';
import { AuthModule } from './Modules/Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUsersModule } from './Modules/Authentification(no use)/AuthUser/AuthUsers.module';
import { UsersModule } from './Modules/Authentification(no use)/Users/Users.module';
import { AppController } from './app.controller';
import { TariffsEditingModule } from './Modules/TariffsEditing/TariffsEditing.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorModule } from './Modules/Authors/Author.module';



@Module({
  imports: [
    AuthModule,
    AuthUsersModule,
    UsersModule,
    TariffsEditingModule,
    AuthorModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'src/GraphQL/schema.graphql'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/DirectMan')
  ],
  controllers: [AppController]
})
export class AppModule {}
