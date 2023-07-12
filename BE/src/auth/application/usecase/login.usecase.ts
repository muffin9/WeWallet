import { RestoreAccessTokenComamnd } from '../command/restore.access.token.command';
import { SocialLoginCommand } from '../command/social.login.command';

export interface SessionUseCase {
  socialLogin(
    command: SocialLoginCommand,
  ): Promise<{ accessToken: string; refreshToken: string }>;

  logout(email: string): Promise<void>;

  restoreAccessToken(command: RestoreAccessTokenComamnd): Promise<string>;
}
