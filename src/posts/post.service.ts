/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Post } from "./post.model";
import {v4 as uuidv4} from 'uuid';
import { PostsRepository } from "./posts.repository";
@Injectable()
export class PostService{
    constructor(private readonly postRepository:PostsRepository){}
    private posts:Post[]=[];
    insertPost(title:string,desc:string,link:string,img:string){
        const id=uuidv4();
        const newPost=new Post(id,title,desc,link,img);
       // this.posts.push(newPost);
        return this.postRepository.create(newPost);
    }
    getPosts(){
        return this.postRepository.find({});
    }
    getPost(id:string){
        return this.postRepository.findOne({id});
    }
    editPost(id:string,title:string,desc:string,link:string,img:string){
        const newPost=new Post(id,title,desc,link,img);
        return this.postRepository.findOneAndUpdate({id},newPost);
    }
    deletePost(id:string){
        return this.postRepository.findOneAndDelete({id});
    }
}