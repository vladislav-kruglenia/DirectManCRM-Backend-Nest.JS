import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectSchemaDocument } from '../Mongoose Schemes/Project';
import { ProjectInfoForClientModel } from '../../Modules/ClientsPersonalAccount/Types/Models/ProjectInfoForClient.model';
import { MainProjectData } from '../../Modules/ClientsPersonalAccount/Types/Models/ClientsAccountInfo.model';

@Injectable()
export class ProjectEditingService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectSchemaDocument>,
  ) {
  }

  async getProjectDataForClient(projectId: string): Promise<ProjectInfoForClientModel> {
    const projectData = await this._getProjectInfo(projectId);
    const mainProjectData = await this.getMainProjectData(projectId, projectData);
    // Todo: позже это нужно исправить. На текущий момент схема Mongoose нацелена только на клиентский аккаунт.
    return {
      ...mainProjectData,
      projectData: projectData.projectData
    }
  }

  async getMainProjectData(projectId: string, project: ProjectSchemaDocument = null): Promise<MainProjectData>{
    const projectData = project || await this._getProjectInfo(projectId);
    const { deadline, projectName, projectStatus } = projectData;
    return { deadline, projectName,  projectStatus, projectId }
  }


  private async _getProjectInfo(projectId: string): Promise<ProjectSchemaDocument> {
    try{
      return this.projectModel.findOne({projectId})
    } catch (e) {
      console.log(e);
      throw new HttpException('No project found with this ID.', 404);
    }

  }
}