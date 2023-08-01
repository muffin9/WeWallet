export class RestoreAccessTokenComamnd {
  readonly userId: number;
  readonly email: string;
  readonly nickname: string;

  constructor(userId: number, email: string, nickname: string) {
    this.userId = userId;
    this.email = email;
    this.nickname = nickname;
  }
}
