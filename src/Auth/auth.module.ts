import { Module } from '@nestjs/common';
import { AuthProvider } from './auth.provider';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Shemas/user.shema';


@Module({
  providers: [AuthProvider],
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],

})
export class AuthModule {}