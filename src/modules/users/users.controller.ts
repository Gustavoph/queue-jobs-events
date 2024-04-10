import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

type CreateUserType = {
  name: string;
  email: string;
  password: string;
};

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserType) {
    return this.usersService.create(data);
  }
}
