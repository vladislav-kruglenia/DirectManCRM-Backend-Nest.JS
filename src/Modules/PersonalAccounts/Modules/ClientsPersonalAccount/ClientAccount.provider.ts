import { Injectable } from '@nestjs/common';
import { ClientAccountEditingService } from '../../DALL/Services/ClientAccountEditing.service';
import { ProjectEditingService } from '../../DALL/Services/ProjectEditing.service';
import { ClientAccountInfoModel, MainProjectData } from './Types/Models/ClientsAccountInfo.model';
import { Client_Account } from '../../DALL/Mongoose Schemes/ClientAccount.schema';
import { ProjectInfoForClientModel } from './Types/Models/ProjectInfoForClient.model';

@Injectable()
export class ClientAccountProvider {
  constructor(
    private clientAccountEditing: ClientAccountEditingService,
    private projectEditing: ProjectEditingService,
  ) {}

  async getProjectInfoForClient(projectId: string): Promise<ProjectInfoForClientModel>{
    return this.projectEditing.getProjectDataForClient(projectId)
  }

  async getClientAccountData(userId: string): Promise<ClientAccountInfoModel> {
    let clientAccountData = await this.clientAccountEditing.getClientAccountData(userId);
    return this._projectsInfoTransformToMainData(clientAccountData);
  }

  private async _projectsInfoTransformToMainData(clientAccountData: Client_Account): Promise<ClientAccountInfoModel> {
    const { userId, completedProjects, frozenProjects, managedProjects, projectsInProgress } = clientAccountData;

    const newCompletedProjects = await this._transformIdToMainProjectInfo(completedProjects);
    const newFrozenProjects = await this._transformIdToMainProjectInfo(frozenProjects);
    const newManagedProjects = await this._transformIdToMainProjectInfo(managedProjects);
    const newProjectsInProgress = await this._transformIdToMainProjectInfo(projectsInProgress);

    return {
      userId,
      completedProjects: newCompletedProjects,
      frozenProjects: newFrozenProjects,
      managedProjects: newManagedProjects,
      projectsInProgress: newProjectsInProgress,
    };
  }

  private async _transformIdToMainProjectInfo(arrayProjectsString: Array<string>): Promise<MainProjectData[]> {
    return Promise.all(arrayProjectsString.map(async (projectId: string): Promise<MainProjectData> => {
      return this.projectEditing.getMainProjectData(projectId);
    }));


  }
}



/*const [newCompletedProjects, newFrozenProjects, newManagedProjects, newProjectsInProgress] = await Promise.all(
      [completedProjects, frozenProjects, managedProjects, projectsInProgress]
        .map(async (arrayProjectsString: string[]): Promise<MainProjectData[]> => this._transformIdToMainProjectInfo(arrayProjectsString))
    );*/
