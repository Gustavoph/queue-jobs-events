import { Body, Controller, Post } from '@nestjs/common';

type CreateUserType = {
  name: string;
  email: string;
  password: string;
};

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() data: CreateUserType) {
    return { user: data };
  }
}
