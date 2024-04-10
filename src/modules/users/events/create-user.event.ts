import { User } from '../entities/user.entity';
import { DomainEvent } from 'src/shared/core/domain.event';

export class CreateUserEvent extends DomainEvent<User> {
  payload: User;

  constructor(payload: User) {
    super();

    this.payload = payload;
  }
}
