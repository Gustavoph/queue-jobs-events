import { Module } from '@nestjs/common';
import { EventModule } from './shared/events/event.module';
import { UsersModule } from './modules/users/users.module';
import { QueueModule } from './shared/queue/queue.module';

@Module({
  imports: [EventModule, UsersModule, QueueModule],
})
export class AppModule {}
