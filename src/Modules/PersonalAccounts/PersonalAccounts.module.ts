import { Module } from '@nestjs/common';
import { ClientsPersonalAccountModule } from './Modules/ClientsPersonalAccount/ClientsPersonalAccount.module';

@Module({
  imports: [
    ClientsPersonalAccountModule,
  ],
})
export class PersonalAccountsModule {
}