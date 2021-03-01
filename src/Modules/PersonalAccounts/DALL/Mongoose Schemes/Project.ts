import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DebtPercentageEnum, ProjectStageEnum, ProjectStatus } from '../../../../Global/GlobalEnums/ClientAccount.enums';
import { Document } from 'mongoose';

export type ProjectSchemaDocument = Project & Document;

@Schema()
export class Comment {
  @Prop({ required: true })
  commentText: string;
  @Prop({ required: true })
  commentDate: string;
  @Prop({ required: true })
  authorId: string;
  @Prop({ required: true })
  authorLogin: string;
}

@Schema()
export class OrderedService {
  @Prop({ required: true })
  isReady: boolean;
  @Prop({ required: true })
  serviceName: string;
}

@Schema()
export class Debt {
  @Prop({ required: true })
  isExists: boolean;
  @Prop()
  amountDebt: number;
  @Prop({ required: true })
  debtPercentage: DebtPercentageEnum;
}

@Schema()
export class ProjectStage {
  @Prop({ required: true })
  isActive: boolean;
  @Prop({ required: true })
  stage: ProjectStageEnum;
}

@Schema()
export class ProjectData {
  @Prop({ required: true })
  projectStages: Array<ProjectStage>;
  @Prop({ required: true })
  dept: Debt;
  @Prop({ required: true })
  orderedServices: Array<OrderedService>;
  @Prop({ required: true })
  briefId: string;
  @Prop({ required: true })
  comments: Array<Comment>;
}

@Schema()
export class Project {
  @Prop({ required: true })
  projectId: string;
  @Prop({ required: true })
  projectStatus: ProjectStatus;
  @Prop({ required: true })
  projectName: string;
  @Prop({ required: true })
  deadline: string;
  @Prop()
  projectData: ProjectData;
}


export const ProjectSchema = SchemaFactory.createForClass(Project);


let Project1: Project = {
  projectId: '1',
  projectStatus: ProjectStatus.InProgress,
  projectName: 'Первый проект',
  deadline: '01.01.2020',
  projectData: {
    projectStages: [
      {
        isActive: false,
        stage: ProjectStageEnum.KeysCollection,
      },
      {
        isActive: true,
        stage: ProjectStageEnum.AdSetup,
      },
    ],
    dept: {
      isExists: true,
      amountDebt: 4000,
      debtPercentage: DebtPercentageEnum.TenPercent,
    },
    orderedServices: [
      {
        isReady: true,
        serviceName: 'Услуга1',
      },
      {
        isReady: false,
        serviceName: 'Услуга2',
      },
    ],
    briefId: 'd8247c35-fa50-473b-83de-d57ab95bfaf7',
    comments: [
      {
        authorId: 'e368defb-bb8c-41ee-a1db-1558cde1f7a3',
        authorLogin: 'ema1',
        commentDate: '01.01.2020',
        commentText: 'Первый комментарий',
      },
    ],
  },
};