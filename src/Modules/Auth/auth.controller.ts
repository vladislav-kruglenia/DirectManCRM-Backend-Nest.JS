import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthProvider } from './Providers/auth.provider';
import { LoginDto } from './DTO/Login.dto';
import { LogoutDto } from './DTO/Logout.dto';
import { Response } from 'express';
import { Cookies } from '../../Decorators/CookieDecorator';


@Controller()
export class AuthController {
  constructor(private authProvider: AuthProvider) {}

  @Post('/login')
  login(@Body()dto: LoginDto, @Res({ passthrough: true }) response: Response) {
    return this.authProvider.login(dto.email, dto.password, response)
  }

  @Post('/logout')
  logout(@Body()dto:LogoutDto, @Res({ passthrough: true }) response: Response) {
    return this.authProvider.logout(dto.userId, response)
  }

  @Post('/refresh-token-is-valid')
  refreshTokeIsValid(@Cookies('refreshToken') refreshToken: string, @Res({ passthrough: true }) response: Response) {
    return this.authProvider.refreshTokeIsValid(response, refreshToken)
  }

  @Get('/get-users')
  getUsers() {
    return this.authProvider.getUsers()
  }

  @Post('/login/saveUser')
  saveUser(@Body()dto: LoginDto) {
    return this.authProvider.saveUser(dto.email, dto.password)
  }

}