import { Args, Query, Resolver } from '@nestjs/graphql';
import { ClientAccountInfoModel } from './Types/Models/ClientsAccountInfo.model';
import { GetClientAccountArgs, GetProjectInfoForClientArgs } from './Types/ClientAccount.args';
import { ProjectInfoForClientModel } from './Types/Models/ProjectInfoForClient.model';
import { ClientAccountProvider } from './ClientAccount.provider';

@Resolver()
export class ClientsAccountResolver {
  constructor(
    private clientAccountProvider: ClientAccountProvider
  ){}

  @Query(returns => ClientAccountInfoModel)
  async getClientAccountInfo(@Args() args: GetClientAccountArgs): Promise<ClientAccountInfoModel>{
    return this.clientAccountProvider.getClientAccountData(args.userId)
  }

  @Query(returns => ProjectInfoForClientModel)
  async getProjectInfoForClient(@Args() args: GetProjectInfoForClientArgs):Promise<ProjectInfoForClientModel>{
    return this.clientAccountProvider.getProjectInfoForClient(args.projectId)
  }
}