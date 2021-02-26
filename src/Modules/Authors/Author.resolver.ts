import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { Author, Post } from './Author.model';
import { AuthorService } from './Author.service';
import { UpvotePostInput } from './InputsTypes/Author.input';
import { PubSub } from 'graphql-subscriptions';
const pubSub = new PubSub();

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorService,
    //private postsService: PostsService,
  ) {}

  @Query(returns => Author)
  async getAuthor(@Args('id', { type: () => Int }) id: number): Promise<Author> {
    return this.authorsService.getDjedaysById(id);
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author):Promise<Array<Post>> {
    const { id } = author;
    return this.authorsService.getDjedaysPosts(id)
    // return this.postsService.findAll({ authorId: id });
  }

  @Mutation(returns => [Post])
  async upvotePost(@Args('upvotePostData') upvotePostData: UpvotePostInput): Promise<Array<Post>> {
    const newPostsArray = await this.authorsService.editPostTitle(upvotePostData);
    await pubSub.publish('postTitleUpdated', {postTitleUpdated: newPostsArray});
    return newPostsArray
  }

  @Subscription(returns => [Post], {
    name: 'postTitleUpdated'
  })
  isUpdatePostTitleSub() {
    return pubSub.asyncIterator('postTitleUpdated');
  }
}