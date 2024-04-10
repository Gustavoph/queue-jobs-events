import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserCreatedSubscriber } from './subscribers/user-created.subscriber';
import { EventModule } from 'src/shared/events/event.module';

@Module({
  imports: [EventModule],
  controllers: [UsersController],
  providers: [UsersService, UserCreatedSubscriber],
})
export class UsersModule {}
