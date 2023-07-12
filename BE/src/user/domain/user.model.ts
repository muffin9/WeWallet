import { PROVIDER } from './vo/provider';

export type UserConstructorInput = {
  id: number;
  provider: string;
  email: string;
  password: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
};
export type CommonUserSignUpType = Omit<
  UserConstructorInput,
  'id' | 'updatedAt' | 'provider' | 'createdAt' | 'updatedAt'
>;
export type SocialUserSignUpType = Pick<
  UserConstructorInput,
  'email' | 'nickname' | 'createdAt'
>;

export class UserModel {
  private readonly id: number;
  private readonly provider: string;
  private email: string;
  private password: string;
  private nickname: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(input: UserConstructorInput) {
    this.id = input.id;
    this.provider = input.provider;
    this.email = input.email;
    this.password = input.password;
    this.nickname = input.nickname;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }

  public static signUpCommon(input: CommonUserSignUpType) {
    return new UserModel({
      ...input,
      id: null,
      provider: PROVIDER.COMMON,
      createdAt: null,
      updatedAt: null,
    });
  }

  public static signUpSocial(input: SocialUserSignUpType) {
    return new UserModel({
      ...input,
      id: null,
      provider: PROVIDER.KAKAO,
      password: null,
      updatedAt: null,
    });
  }

  public getProperties() {
    return {
      id: this.id,
      provider: this.provider,
      email: this.email,
      password: this.password,
      nickname: this.nickname,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
