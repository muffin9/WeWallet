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
