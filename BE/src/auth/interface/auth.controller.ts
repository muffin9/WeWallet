import { Controller, Get, Inject, Req, Res, UseGuards } from '@nestjs/common';
import { SessionUseCase } from '../application/usecase/login.usecase';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthDtoMapper } from './auth.dto.mapper';
import { Request, Response } from 'express';
import { kakaoUserTypeResponse } from './kakao.user';
import commonLoginConfig from '@/config/common.login.config';
import { ConfigType } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('SessionUseCase')
    private readonly sessionUsecase: SessionUseCase,

    @Inject(commonLoginConfig.KEY)
    private readonly config: ConfigType<typeof commonLoginConfig>,
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
      maxAge: this.config.cookieMaxAge,
      httpOnly: true,
    });
    res.cookie('access-token', loginInfo.accessToken, {
      path: '/',
      maxAge: this.config.cookieMaxAge,
      httpOnly: true,
    });
    res.redirect('http://localhost:3000');
  }
}
