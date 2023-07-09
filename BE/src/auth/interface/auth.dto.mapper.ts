import { Request } from 'express';
import { SocialLoginCommand } from '../usecase/login.usecase';
import { kakaoUserTypeResponse } from '../interface/kakao.user';

export class AuthDtoMapper {
  public static toSocialLoginCommand(request: Request & kakaoUserTypeResponse) {
    return new SocialLoginCommand({
      ...request.user,
      userId: Number(request.user.userId),
    });
  }
}
