import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class MainProjectData {
  @Field()
  projectId: string;
  @Field()
  projectName: string;
  @Field()
  projectStatus: string;
  @Field()
  deadline: string;
}


@ObjectType()
export class ClientAccountInfoModel {
  @Field()
  userId: string;

  @Field(type => [MainProjectData])
  projectsInProgress: Array<MainProjectData>;

  @Field(type => [MainProjectData])
  managedProjects: Array<MainProjectData>;

  @Field(type => [MainProjectData])
  frozenProjects: Array<MainProjectData>;

  @Field(type => [MainProjectData])
  completedProjects: Array<MainProjectData>;
}