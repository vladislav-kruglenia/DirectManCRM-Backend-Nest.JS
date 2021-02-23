import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './Shemas/user.shema';


@Injectable()
export class AuthProvider {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async login() {}

  async getUsers() {
    const candidate = await this.userModel.find();
    // res.json(candidate);
    return candidate
  }

  logout() {
    return 'logout'
  }

  refreshTokeIsValid() {
    return 'refreshTokeIsValid'
  }

  saveUser() {
    return 'saveUser'
  }
}