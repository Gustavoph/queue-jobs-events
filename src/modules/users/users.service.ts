import { Injectable } from '@nestjs/common';
import { EventService } from 'src/shared/events/event.service';
import { CreateUserEvent } from './events/create-user.event';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly eventService: EventService) {}

  async create(data: User) {
    this.eventService.emit('user.create', new CreateUserEvent(data));
  }
}
