import { Field, ObjectType } from '@nestjs/graphql';
import { MainProjectData } from './ClientsAccountInfo.model';
import { DebtPercentageEnum, ProjectStageEnum } from '../../../../../../Global/GlobalEnums/ClientAccount.enums';

@ObjectType()
export class Comment {
  @Field()
  commentText: string;
  @Field()
  commentDate: string;
  @Field()
  authorId: string;
  @Field()
  authorLogin: string;
}

@ObjectType()
export class Debt {
  @Field()
  isExists: boolean;
  @Field({nullable: true})
  amountDebt: number;
  @Field({nullable: true})
  debtPercentage: DebtPercentageEnum;
}

@ObjectType()
export class OrderedService {
  @Field()
  isReady: boolean;
  @Field()
  serviceName: string
}

@ObjectType()
export class ProjectStage {
  @Field()
  isActive: boolean;
  @Field()
  stage: ProjectStageEnum;
}

@ObjectType()
export class ProjectData {
  @Field(type => [ProjectStage])
  projectStages: Array<ProjectStage>;
  @Field()
  dept: Debt;
  @Field(type => [OrderedService])
  orderedServices: Array<OrderedService>;
  @Field()
  briefId: string;
  @Field(type => [Comment])
  comments: Array<Comment>;
}

@ObjectType()
export class ProjectInfoForClientModel extends MainProjectData{
  @Field()
  projectData: ProjectData;
}