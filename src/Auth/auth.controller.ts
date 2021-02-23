import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthProvider } from './auth.provider';
import { LoginDto } from './DTO/Login.dto';


@Controller()
export class AuthController {
  constructor(private authProvider: AuthProvider) {
  }

  @Post('/login')
  login(@Body()dto: LoginDto) {
    return this.authProvider.login()
  }

  @Get('/logout')
  logout() {
    return this.authProvider.logout()
  }

  @Get('/refresh-token-is-valid')
  refreshTokeIsValid() {
    return this.authProvider.refreshTokeIsValid()
  }

  @Get('/get-users')
  getUsers() {
    return this.authProvider.getUsers()
  }

  @Get('/login/saveUser')
  saveUser() {
    return this.authProvider.saveUser()
  }




}