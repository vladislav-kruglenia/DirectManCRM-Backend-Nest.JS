import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetTokens } from './Types/TokensProviderTypes';

@Injectable()
export class TokensProvider {
  constructor(private jwtService: JwtService) {
  }

  getTokens(email: string, userId: string): GetTokens {
    let payload = { email, userId };
    return {
      token: this.jwtService.sign(payload, { expiresIn: '6h' }),
      refreshToken: this.jwtService.sign({...payload, type: 'refresh'}, { expiresIn: '24h' }),
    };
  }

  tokenVerify(refreshToken: string) {
    try {
      return this.jwtService.verify(refreshToken);
    } catch (e) {
      return new HttpException(`${e}`, HttpStatus.BAD_REQUEST)
    }
  }
}