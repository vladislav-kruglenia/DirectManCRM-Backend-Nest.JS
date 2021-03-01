import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client_Account, ClientAccountDocument } from '../Mongoose Schemes/ClientAccount.schema';

@Injectable()
export class ClientAccountEditingService {
  constructor(
    @InjectModel(Client_Account.name) private clientAccountModel: Model<ClientAccountDocument>,
  ) {
  }

  async getClientAccountData(userId: string): Promise<Client_Account> {
    const clientAccountData = await this._getClientAccountModel(userId);
    const { projectsInProgress, managedProjects, frozenProjects, completedProjects } = clientAccountData;
    return { userId, projectsInProgress, managedProjects, frozenProjects, completedProjects };
  }

  private async _getClientAccountModel(userId: string): Promise<ClientAccountDocument> {
    try {
      return this.clientAccountModel.findOne({ userId });

    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', 500);
    }

  }
}