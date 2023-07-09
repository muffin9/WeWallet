export class RestoreAccessTokenComamnd {
  readonly email: string;
  readonly nickname: string;

  constructor(email: string, nickname: string) {
    this.email = email;
    this.nickname = nickname;
  }
}

export class SocialLoginCommand {
  readonly nickname: string;
  readonly email: string;
  readonly userId: number;

  constructor(input: { nickname: string; email: string; userId: number }) {
    this.nickname = input.nickname;
    this.email = input.email;
    this.userId = input.userId;
  }
}

export interface SessionUseCase {
  socialLogin(
    command: SocialLoginCommand,
  ): Promise<{ accessToken: string; refreshToken: string }>;

  logout(email: string): Promise<void>;

  restoreAccessToken(command: RestoreAccessTokenComamnd): Promise<string>;
}
