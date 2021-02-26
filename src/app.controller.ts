import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthUsersService } from './Modules/Authentification(no use)/AuthUser/AuthUsers.service';
import { JwtAuthGuard } from './Modules/Authentification(no use)/AuthUser/Guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthUsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}