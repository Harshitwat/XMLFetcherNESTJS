/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './post,controller';
import { PostService } from './post.service';
import { PostsRepository } from './posts.repository';
import { Post, PostSchema } from './schemas/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Post.name,schema:PostSchema}])],
  controllers: [PostController],
  providers: [PostService,PostsRepository],
})
export class PostModule {}
