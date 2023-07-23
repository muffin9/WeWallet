import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@/entities/user.entity';
import { signupUserTypeRequest } from './interface/signup';
import { Response } from 'express';
import { USER_STATUS } from './interface/status';
import { SessionUseCase } from '@/auth/usecase/login.usecase';
import { AuthDtoMapper } from '@/auth/interface/auth.dto.mapper';

@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('SessionUseCase')
    private readonly sessionUsecase: SessionUseCase,
  ) {}
  @Get('/findall')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/check')
  getUserbyEmail(@Query('email') email?: string) {
    return this.userService.getUserbyEmail(email);
  }

  @Post('/')
  async createUser(@Body() user: signupUserTypeRequest, @Res() res: Response) {
    const response = await this.userService.createUser(user);

    if (response === USER_STATUS.USER_CREATED) {
      const loginInfo = await this.sessionUsecase.localLogin(
        AuthDtoMapper.toLocalLoginCommand({
          email: user.email,
          nickname: user.nickname,
          name: user.name,
        }),
      );

      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.cookie('refresh-token', loginInfo.refreshToken, {
        path: '/',
        maxAge: 60 * 60 * 10,
        httpOnly: true,
      });
      res.cookie('access-token', loginInfo.accessToken, {
        path: '/',
        maxAge: 60 * 60 * 10,
        httpOnly: true,
      });
    }
  }
}
