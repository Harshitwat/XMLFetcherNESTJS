/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Post, PostDocument } from "./schemas/post.schema";

@Injectable()
export class PostsRepository{
    constructor(@InjectModel(Post.name) private postModel:Model<PostDocument>){}

    async findOne(postFilterQuery:FilterQuery<Post>):Promise<Post>{
        return this.postModel.findOne(postFilterQuery);
    }

    async find(postsFilterQuery:FilterQuery<Post>):Promise<Post[]>{
        return this.postModel.find(postsFilterQuery);
    }
    async create(post:Post):Promise<Post>{
        const newPost=new this.postModel(post);
        return newPost.save();
    }
    async findOneAndUpdate(postFilterQuery:FilterQuery<Post>,post:Partial<Post>):Promise<Post>{
        return this.postModel.findOneAndUpdate(postFilterQuery,post);
    }
    async findOneAndDelete(postFilterQuery:FilterQuery<Post>):Promise<Post>{
        return this.postModel.findOneAndDelete(postFilterQuery);
    }
}