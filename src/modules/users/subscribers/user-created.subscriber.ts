import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserCreatedSubscriber {
  @OnEvent('user.create')
  async perform(payload: any) {
    console.log(payload);
  }
}
