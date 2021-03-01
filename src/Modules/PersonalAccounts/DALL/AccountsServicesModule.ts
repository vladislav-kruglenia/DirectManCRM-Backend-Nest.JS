import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Client_Account, ClientAccountSchema } from './Mongoose Schemes/ClientAccount.schema';
import { Project, ProjectSchema } from './Mongoose Schemes/Project';
import { ClientAccountEditingService } from './Services/ClientAccountEditing.service';
import { ProjectEditingService } from './Services/ProjectEditing.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Client_Account.name, schema: ClientAccountSchema },
      { name: Project.name, schema: ProjectSchema },
    ])
  ],
  providers: [ClientAccountEditingService, ProjectEditingService],
  exports: [ClientAccountEditingService, ProjectEditingService],
})
export class AccountsServicesModule {

}