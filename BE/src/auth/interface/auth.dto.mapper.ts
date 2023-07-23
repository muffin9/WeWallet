import { Request } from 'express';
import {
  SocialLoginCommand,
  LocalLoginCommand,
} from '../usecase/login.usecase';
import { kakaoUserTypeResponse } from '../interface/kakao.user';
import { LocalUserTypeResponse } from './local.user';

export class AuthDtoMapper {
  public static toSocialLoginCommand(request: Request & kakaoUserTypeResponse) {
    return new SocialLoginCommand({
      ...request.user,
      userId: Number(request.user.userId),
    });
  }

  public static toLocalLoginCommand(request: {
    email: string;
    nickname: string;
    name: string;
  }) {
    return new LocalLoginCommand(request);
  }
}
