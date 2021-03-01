import { Module } from '@nestjs/common';
import { ClientsAccountResolver } from './ClientsAccount.resolver';
import { ClientAccountProvider } from './ClientAccount.provider';
import { AccountsServicesModule } from '../../DALL/AccountsServicesModule';

@Module({
  imports: [
    AccountsServicesModule
  ],
  exports: [ClientsAccountResolver],
  providers: [ClientsAccountResolver, ClientAccountProvider]
})
export class ClientsPersonalAccountModule {}