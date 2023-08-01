import { Inject, Injectable } from '@nestjs/common';
import {
  LocalLoginCommand,
  SessionUseCase,
  SocialLoginCommand,
} from './usecase/login.usecase';
import { TokenService } from '@/token/token.service';
import { ISessionStore } from './session/session.store.interface';
import { RestoreAccessTokenComamnd } from './command/restore.access.token.command';

@Injectable()
export class AuthService implements SessionUseCase {
  constructor(
    @Inject('TokenService')
    private readonly tokenService: TokenService,

    @Inject('ISessionStore')
    private readonly sessionStore: ISessionStore,
  ) {}

  logout(email: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async restoreAccessToken(command: RestoreAccessTokenComamnd) {
    const { userId, nickname, email } = command;
    const payload = { userId, nickname, email };
    const accessTokenJwt = await this.tokenService.createAccessToken(payload);
    return accessTokenJwt;
  }

  async socialLogin(command: SocialLoginCommand) {
    const { userId, email, nickname } = command;
    const payload = { nickname, email, userId };
    const [accessTokenJwt, refreshTokenJwt] = await Promise.all([
      this.tokenService.createAccessToken(payload),
      this.tokenService.createRefreshToken(payload),
    ]);
    await this.sessionStore.create(refreshTokenJwt, email);
    return { accessToken: accessTokenJwt, refreshToken: refreshTokenJwt };
  }

  async localLogin(command: LocalLoginCommand) {
    const { userId, email, nickname } = command;
    const payload = { userId, email, nickname };
    const [accessTokenJwt, refreshTokenJwt] = await Promise.all([
      this.tokenService.createAccessToken(payload),
      this.tokenService.createRefreshToken(payload),
    ]);
    await this.sessionStore.create(refreshTokenJwt, email);
    return { accessToken: accessTokenJwt, refreshToken: refreshTokenJwt };
  }
}
