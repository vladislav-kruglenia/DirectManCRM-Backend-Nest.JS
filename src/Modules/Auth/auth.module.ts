import { Module } from '@nestjs/common';
import { AuthProvider } from './Providers/auth.provider';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Shemas/user.shema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../Authentification(no use)/AuthUser/constants';
import { JwtStrategy } from '../Authentification(no use)/AuthUser/Strategyes/jwt.strategy';
import { TokensProvider } from './Providers/tokens.provider';


@Module({
  providers: [AuthProvider, TokensProvider, JwtStrategy],
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [AuthProvider, JwtModule]
})
export class AuthModule {}