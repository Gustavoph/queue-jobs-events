import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { User } from '../entities/user.entity';

@Injectable()
export class UserCreatedSubscriber {
  @OnEvent('user.create')
  async perform(payload: User) {
    console.log(payload);
  }
}
