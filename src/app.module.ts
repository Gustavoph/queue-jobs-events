import { Module } from '@nestjs/common';
import { EventModule } from './shared/events/event.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [EventModule, UsersModule],
})
export class AppModule {}
