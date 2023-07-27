import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import { Request } from 'express';

import commonLoginConfig from '@/config/common.login.config';

@Injectable()
export class LocalRefreshStrategy extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor(
    @Inject(commonLoginConfig.KEY)
    private readonly config: ConfigType<typeof commonLoginConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwtSecret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: { nickname: string; email: string }) {
    const refreshToken = req.headers.authorization.replace('Bearer ', '');
    // const session = await this.sessionReader.getSession(refreshToken);
    // if (!session)
    //   throw new UnauthorizedException('해당하는 세션이 존재하지 않습니다');
    return { ...payload };
  }
}
