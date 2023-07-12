export class RestoreAccessTokenComamnd {
  readonly email: string;
  readonly nickname: string;

  constructor(email: string, nickname: string) {
    this.email = email;
    this.nickname = nickname;
  }
}
