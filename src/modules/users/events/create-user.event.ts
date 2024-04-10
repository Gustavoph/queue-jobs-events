export class CreateUserEvent {
  message: string;
  data: any;

  constructor(data: any) {
    this.message = 'create user event';
    this.data = data;
  }
}
