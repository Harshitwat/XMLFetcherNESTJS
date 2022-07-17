/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import {  HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { xml2json } from 'xml-js';
import { map } from 'rxjs';


@Controller('xml-parser')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private http: HttpService
  ) {}

  @Get(':url')
  getxml(@Param() param) {
   return this.http.get<string>(param.url).pipe(
    map((xmldata) => {
      const data=xml2json(xmldata.data, {compact: true, spaces: 4});
      const obj=JSON.parse(data);
      const items=obj.rss.channel.item;
      const result=[];
      for (let i = 0; i < items.length; i++) {
        result.push({
          'title':items[i].title._cdata,
          'description':items[i].description._cdata,
          'link':items[i].link._text,
          'img':items[i].enclosure._attributes.url
        })
        
      }
      return result;
    })
  );
   
  //  .subscribe((xmldata)=>{
  //   const data=xml2json(xmldata.data, {compact: true, spaces: 4});
  //   const obj=JSON.parse(data);
  //   return obj.rss.channel.item;
  //   console.log(obj.rss.channel.item[0].enclosure._attributes.url);
    
  //  })
    //return body.url;
  }
  
}
