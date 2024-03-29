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
import { USER_STATUS } from '@/utils/status';
import { SessionUseCase } from '@/auth/usecase/login.usecase';
import { AuthDtoMapper } from '@/auth/interface/auth.dto.mapper';
import { loginUserTypeRequest } from './interface/login';

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
  getUserByEmail(@Query('email') email?: string) {
    return this.userService.getUserByEmail(email);
  }

  @Post('/signup')
  async signupUser(
    @Body() requestUser: signupUserTypeRequest,
    @Res() res: Response,
  ) {
    const { user, status } = await this.userService.signupUser(requestUser);

    if (status === USER_STATUS.USER_CREATED) {
      const loginInfo = await this.sessionUsecase.localLogin(
        AuthDtoMapper.toLocalLoginCommand({
          userId: user.userId,
          email: user.email,
          nickname: user.nickname,
        }),
      );

      res.cookie('refresh-token', loginInfo.refreshToken, {
        path: '/',
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.cookie('access-token', loginInfo.accessToken, {
        path: '/',
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.send({ status, user });
    }

    return res.send({ status, user });
  }

  @Post('/login')
  async login(@Body() requestUser: loginUserTypeRequest, @Res() res: Response) {
    const { user, status } = await this.userService.login(requestUser);

    if (status === USER_STATUS.USER_LOGIN_SUCCESS) {
      const loginInfo = await this.sessionUsecase.localLogin(
        AuthDtoMapper.toLocalLoginCommand({
          userId: user.userId,
          email: user.email,
          nickname: user.nickname,
        }),
      );

      res.cookie('refresh-token', loginInfo.refreshToken, {
        path: '/',
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.cookie('access-token', loginInfo.accessToken, {
        path: '/',
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.send({ status, user });
    }

    return res.send({ status, user });
  }
}
