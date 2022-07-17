/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";
export type PostDocument=Post & Document;
@Schema()
export class Post{
    @Prop({ required: true })
    id:string;
    @Prop({ required: true })
    title:string;
    @Prop({ required: true })
    description:string;
    @Prop({ required: true })
    link:string;
    @Prop({ required: false })
    img:string;
}
export const PostSchema=SchemaFactory.createForClass(Post);