import { Injectable } from '@nestjs/common';
import { Author, Post } from './Author.model';
import { UpvotePostInput } from './InputsTypes/Author.input';

@Injectable()
export class AuthorService {
  private readonly Authors: Array<Author> = [
    {
      id: 1,
      firstName: 'Люк',
      lastName: 'Скайуокер',
      posts: [
        {
          id: 1,
          title: 'Сын вейдера',
          votes: 26,
        },
        {
          id: 1,
          title: 'Сын вейдера',
          votes: 26,
        },
        {
          id: 1,
          title: 'Сын вейдера',
          votes: 26,
        },
      ],
    },
    {
      id: 2,
      firstName: 'Пал',
      lastName: 'Палыч',
      posts: [
        {
          id: 1,
          title: 'Сын маминой подруги',
          votes: 26,
        },
        {
          id: 1,
          title: 'Сын маминой подруги',
          votes: 26,
        },
        {
          id: 1,
          title: 'Сын маминой подруги',
          votes: 26,
        },
      ],
    },
    {
      id: 3,
      firstName: 'Энакин',
      lastName: 'Скайуокер',
      posts: [
        {
          id: 1,
          title: 'Сын Палыча',
          votes: 26,
        },
        {
          id: 1,
          title: 'Сын Палыча',
          votes: 26,
        },
        {
          id: 1,
          title: 'Сын Палыча',
          votes: 26,
        },
      ],
    },

  ];


  getDjedaysById(id: number): Author {
    return this.Authors.find((author: Author) => id === author.id);
  }

  getDjedaysPosts(id: number): Array<Post> {
    return this.getDjedaysById(id).posts;
  }

  editPostTitle(upvotePostData: UpvotePostInput): Array<Post> {
    let { authorId, postId, title } = upvotePostData;
    return this.getDjedaysPosts(authorId).map((post: Post) => {
      post.title = post.id === postId ? title : post.title;
      return post;
    });
  }
}