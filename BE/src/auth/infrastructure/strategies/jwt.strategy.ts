import { Inject, Injectable } from '@nestjs/common';
import { TokenService } from '@/token/token.service';
import { ConfigType } from '@nestjs/config';
import * as jwService from 'jsonwebtoken';
import commonLoginConfig from '@/config/common.login.config';

@Injectable()
export class JwtTokenService implements TokenService {
  constructor(
    @Inject(commonLoginConfig.KEY)
    private readonly config: ConfigType<typeof commonLoginConfig>,
  ) {}

  async createAccessToken(value: any) {
    const jwt = await jwService.sign({ ...value }, this.config.jwtSecret, {
      expiresIn: this.config.accessExpiresIn,
    });
    return jwt;
  }

  async createRefreshToken(value: any) {
    const jwt = await jwService.sign({ ...value }, this.config.jwtSecret, {
      expiresIn: this.config.refreshExpiresIn,
    });
    return jwt;
  }
}
