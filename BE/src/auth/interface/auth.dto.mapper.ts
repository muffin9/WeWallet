import { Request } from 'express';
import { SocialLoginCommand } from '../application/command/social.login.command';
import { kakaoUserTypeResponse } from './kakao.user';

export class AuthDtoMapper {
  public static toSocialLoginCommand(request: Request & kakaoUserTypeResponse) {
    return new SocialLoginCommand({
      ...request.user,
      userId: Number(request.user.userId),
    });
  }
}
