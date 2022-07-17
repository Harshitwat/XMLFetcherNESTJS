/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController{
    constructor(private readonly postService:PostService){}
    // @Get()
    // getPosts(){
    //     return "hello";
    // }

    @Post()
    createPost(@Body() body){
         const postId= this.postService.insertPost(body.title,body.description,body.link,body.img);
        return {
            id:postId,
        }
    }
    @Get(':postId')
    getPost(@Param() param){
        return this.postService.getPost(param.postId);
    }

    @Get()
    getAllPosts(){
        return this.postService.getPosts();
    }


    @Put(':postId')
    editPost(@Param() param,@Body() body){
        return this.postService.editPost(param.postId,body.title,body.description,body.link,body.img);
    }

    @Delete(':postId')
    deletePost(@Param() param){
        return this.postService.deletePost(param.postId);
    }

}