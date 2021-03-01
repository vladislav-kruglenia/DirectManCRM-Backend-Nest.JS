import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetClientAccountArgs {
  @Field()
  userId: string;
}

@ArgsType()
export class GetProjectInfoForClientArgs {
  @Field()
  projectId: string;
}

