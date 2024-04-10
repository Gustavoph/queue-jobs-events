import { Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Job, Queue } from 'bull';
import { QUEUES } from 'src/shared/queue/queues';
import { CreateUserEvent } from '../events/create-user.event';
import { MailerService } from 'src/shared/mailer/mailer.service';

@Processor(QUEUES.USERS.KEY)
export class UserCreatedSubscriber {
  private logger = new Logger(UserCreatedSubscriber.name);

  constructor(
    @InjectQueue(QUEUES.USERS.KEY) private readonly queue: Queue,
    private readonly mailer: MailerService,
  ) {}

  @OnEvent('user.create')
  async handleEvent(event: CreateUserEvent) {
    await this.queue.add(QUEUES.USERS.CREATE_USER, event);
    this.logger.log({
      message: `A new Job added on ${QUEUES.USERS.KEY}:${QUEUES.USERS.CREATE_USER}`,
    });
  }

  @Process(QUEUES.USERS.CREATE_USER)
  async perform({ data }: Job<CreateUserEvent>) {
    const { name, email } = data.payload;

    try {
      this.mailer.send({
        from: 'Queue Test <queue@queueteste.com.br>',
        to: `${name} <${email}>`,
        subject: 'Cadastro de usuário',
        html: `Olá, ${name}, bem-vindo ao sistema de filas do Gusta!`,
      });

      this.logger.log({
        message: `Send email to ${name} <${email}>`,
      });
    } catch (error) {
      this.logger.error({
        message: `Error on process ${QUEUES.USERS.CREATE_USER}`,
      });
    }
  }
}
