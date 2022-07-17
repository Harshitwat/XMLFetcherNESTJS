/* eslint-disable prettier/prettier */
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PostModule} from './posts/post.module';
@Module({
  imports: [HttpModule,PostModule,MongooseModule.forRoot(`mongodb+srv://harshit:9iRQHAj1eDN6kD2W@cluster0.e7uccpb.mongodb.net/?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
