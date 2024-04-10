import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserCreatedSubscriber } from './subscribers/user-created.subscriber';
import { EventModule } from 'src/shared/events/event.module';
import { MailerModule } from 'src/shared/mailer/mailer.module';
import { BullModule } from '@nestjs/bull';
import { QUEUES } from 'src/shared/queue/queues';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: QUEUES.USERS.KEY,
    }),
    EventModule,
    MailerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UserCreatedSubscriber],
})
export class UsersModule {}
