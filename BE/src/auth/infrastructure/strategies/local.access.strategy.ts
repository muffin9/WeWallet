import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import commonLoginConfig from '@/config/common.login.config';

@Injectable()
export class LocalAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor(
    @Inject(commonLoginConfig.KEY)
    private readonly config: ConfigType<typeof commonLoginConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.jwtSecret,
    });
  }

  async validate(payload: { nickname: string; email: string }) {
    return { ...payload };
  }
}
