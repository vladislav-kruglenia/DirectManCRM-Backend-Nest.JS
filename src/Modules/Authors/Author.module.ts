import { Module } from '@nestjs/common';
import { AuthorService } from './Author.service';
import { AuthorsResolver } from './Author.resolver';

@Module({
  exports: [AuthorsResolver],
  providers:[AuthorService, AuthorsResolver]
})
export class AuthorModule {

}