import { Module } from '@nestjs/common';
import { AuthUsersService } from './AuthUsers.service';
import { UsersModule } from '../Users/Users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './Local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({

  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthUsersService, LocalStrategy, JwtStrategy],
  exports: [AuthUsersService, JwtModule],
})
export class AuthUsersModule {

}