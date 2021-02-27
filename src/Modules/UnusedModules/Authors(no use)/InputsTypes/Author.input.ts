import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpvotePostInput {
  @Field()
  authorId: number;

  @Field()
  postId: number;

  @Field()
  title: string
}