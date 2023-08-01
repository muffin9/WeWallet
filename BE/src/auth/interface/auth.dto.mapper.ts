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
    userId: number;
    email: string;
    nickname: string;
  }) {
    return new LocalLoginCommand(request);
  }

  public static toAccessTokenRestoreCommand(
    request: Request & {
      user: { userId: number; email: string; nickname: string };
    },
  ) {
    const { userId, email, nickname } = request.user;
    return new RestoreAccessTokenComamnd(userId, email, nickname);
  }
}
