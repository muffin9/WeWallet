import { Inject, Injectable } from '@nestjs/common';
import {
  RestoreAccessTokenComamnd,
  SessionUseCase,
  SocialLoginCommand,
} from './usecase/login.usecase';
import { TokenService } from '@/token/token.service';
import { ISessionStore } from './session/session.store.interface';

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
  restoreAccessToken(command: RestoreAccessTokenComamnd): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async socialLogin(command: SocialLoginCommand) {
    const { nickname, email, userId } = command;
    const payload = { nickname, email, userId };
    const [accessTokenJwt, refreshTokenJwt] = await Promise.all([
      this.tokenService.createAccessToken(payload),
      this.tokenService.createRefreshToken(payload),
    ]);
    await this.sessionStore.create(refreshTokenJwt, email);
    return { accessToken: accessTokenJwt, refreshToken: refreshTokenJwt };
  }
}
