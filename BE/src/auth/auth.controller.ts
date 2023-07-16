import { Controller, Get, Inject, Req, Res, UseGuards } from '@nestjs/common';
import { SessionUseCase } from './usecase/login.usecase';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
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
    res.redirect('http://localhost:3000');
  }
}
