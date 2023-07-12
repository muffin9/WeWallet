import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserUseCase } from './application/login.usercase';

@Controller('user')
export class UserController {
  constructor(
    @Inject('UserUseCase')
    private readonly userUseCase: UserUseCase,
  ) {}
}
