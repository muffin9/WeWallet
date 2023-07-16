import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':email')
  getUserbyEmail(@Param() params) {
    return this.userService.getUserbyEmail(params.email);
  }
}
