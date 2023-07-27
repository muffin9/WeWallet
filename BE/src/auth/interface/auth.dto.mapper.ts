import { Request } from 'express';
import {
  SocialLoginCommand,
  LocalLoginCommand,
} from '../usecase/login.usecase';
import { kakaoUserTypeResponse } from '../interface/kakao.user';
import { RestoreAccessTokenComamnd } from '../command/restore.access.token.command';

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

  public static toAccessTokenRestoreCommand(
    request: Request & { user: { email: string; nickname: string } },
  ) {
    const { email, nickname } = request.user;
    return new RestoreAccessTokenComamnd(email, nickname);
  }
}
