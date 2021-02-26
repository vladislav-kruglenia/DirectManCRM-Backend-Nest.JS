import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../Shemas/user.shema';
import * as bcrypt from 'bcrypt';
import { TokensProvider } from './tokens.provider';
import { v4 as uuidv4 } from 'uuid';
import { Response } from 'express';

@Injectable()
export class AuthProvider {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private tokensProvider: TokensProvider,
  ) {
  }

  async login(email: string, password: string, res: Response) {
    const user = await this.userModel.findOne({ email: email });
    if (user) {
      //Сравнение паролей
      const passwordResult = bcrypt.compareSync(password, user.password);
      if (passwordResult) {
        // Создание, сохранение и отправка новых токенов клиенту
        let { token, refreshToken } = this.tokensProvider.getTokens(email, user.userId);

        try {
          user.refreshToken = refreshToken;
          await user.save();
        } catch (e) {
          console.log(e);
        }
        res.cookie('refreshToken', `${refreshToken}`);
        return {
          message: 'Token created',
          isAuth: true,
          userId: user.userId,
          token: `Bearer ${token}`,
        };
      } else {
        // Неверный пароль
        throw new HttpException('Passwords do not match.', HttpStatus.UNAUTHORIZED);
      }
    } else {
      // Нет в базе пользователя с такой почтой
      throw new HttpException('Passwords do not match.', HttpStatus.NOT_FOUND);
    }
  }

  async getUsers() {
    const candidate = await this.userModel.find();
    // res.json(candidate);
    return candidate;
  }

  async logout(userId: string, res: Response) {
    const user = await this.userModel.findOne({ userId });
    if (user) {
      // Обнуление токена обновления в бд
      user.refreshToken = '';
      try {
        await user.save();
        // Обнуление токена обновления в cookie
        res.setHeader('Set-Cookie', `refreshToken=null; HttpOnly`);
        return {
          message: 'Refresh token cleared.',
          isAuth: false,
        };

      } catch (err) {
        console.log(err);
        throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } else {
      // Нет в базе пользователя с таким id
      throw new HttpException('This user is not registered.', HttpStatus.UNAUTHORIZED);
    }
  }

  async saveUser(email: string, password: string) {
    const candidate = await this.userModel.findOne({ email });
    if (candidate) {
      throw new HttpException('User with such mail already exists', HttpStatus.FORBIDDEN);
    } else {
      const user = new this.userModel({
        userId: uuidv4(),
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      });
      try {
        await user.save();
        console.log('Сохранен объект', user);
        return { message: 'User is registered' };

      } catch (e) {
        return console.log(e);
      }
    }
  }

  async refreshTokeIsValid(res: Response, refreshTokenCookie: string) {
    // Поиск пользователя с таким токеном
    let user = await this.userModel.findOne({ refreshToken: refreshTokenCookie });
    if (user) {
      // Проверка типа токена
      let payload = this.tokensProvider.tokenVerify(refreshTokenCookie);
      if (payload.type !== 'refresh') throw new HttpException('Invalid token.', HttpStatus.INTERNAL_SERVER_ERROR);

      // Создание и отправка новых токенов клиенту
      let { token, refreshToken } = this.tokensProvider.getTokens(user.email, user.userId);
      try {
        user.refreshToken = refreshToken;
        await user.save();
      } catch (e) {
        console.log(e);
      }
      res.cookie('refreshToken', `${refreshToken}`);
      return {
        message: 'Token created',
        isAuth: true,
        userId: user.userId,
        token: `Bearer ${token}`,
      };

    } else {
      throw new HttpException('User is not auth.', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}