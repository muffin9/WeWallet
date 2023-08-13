import {
  Controller,
  Get,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SessionUseCase } from './usecase/login.usecase';
import {
  ApiBearerAuth,
  ApiExcludeEndpoint,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthDtoMapper } from './interface/auth.dto.mapper';
import { Request, Response } from 'express';

export type kakaoUserTypeResponse = {
  user: {
    email: string;
    nickname: string;
    accessToken: string;
    refreshToken: string;
    userId: number;
  };
};

@Controller('/api/auth')
export class AuthController {
  constructor(
    @Inject('SessionUseCase')
    private readonly sessionUsecase: SessionUseCase,
  ) {}

  @ApiOperation({
    summary: 'accesstoken 만료시 요청 api',
    description:
      '클라이언트 cookie 에 있는 refreshToken 값을 Authorization 헤더에 Bearer 로 넣어서 요청',
  })
  @ApiBearerAuth()
  @ApiResponse({ description: '성공응답시', status: 200 })
  @Post('/access-token/restore')
  async restoreAccessToken(
    @Req()
    req: Request & {
      user: { userId: number; email: string; nickname: string };
    },
    @Res() res: Response,
  ) {
    const accessToken = await this.sessionUsecase.restoreAccessToken(
      AuthDtoMapper.toAccessTokenRestoreCommand(req),
    );

    res.cookie('access-token', accessToken, {
      path: '/',
      maxAge: 60 * 60 * 10,
      httpOnly: true,
    });
    res.status(200).send({ status: 'ok' });
  }

  @ApiExcludeEndpoint()
  @Get('/kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoRedirectHandler(
    @Req() req: Request & kakaoUserTypeResponse,
    @Res() res: Response,
  ) {
    const loginInfo = await this.sessionUsecase.socialLogin(
      AuthDtoMapper.toSocialLoginCommand(req),
    );

    if (loginInfo.accessToken) {
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
      return res.redirect('http://localhost:3000/main');
    }
  }
}
