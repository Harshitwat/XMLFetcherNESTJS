import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(@Param() params) {
    return {
      ...params,
    };
  }
}
