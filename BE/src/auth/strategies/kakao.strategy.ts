import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { ConfigType } from '@nestjs/config';
import { UserModel } from '@/user/domain/user.model';
import kakaoLoginConfig from '@/config/kakao.login.config';

export type kakaoUserType = {
  email: string;
  nickname: string;
  userId: number;
};

interface IUserReader {
  getUserByEmail(email: string): Promise<UserModel>;
}

interface IUserStore {
  create(user: UserModel): Promise<number>;
}

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(
    @Inject(kakaoLoginConfig.KEY)
    private readonly config: ConfigType<typeof kakaoLoginConfig>,

    private readonly userReader: IUserReader,

    private readonly userStore: IUserStore,
  ) {
    super({
      clientID: config.clientId,
      clientSecret: '',
      callbackURL: config.callbackUrl,
    });
  }

  async validate(accessToken, refreshToken, profile, done) {
    const profileJsonAccount = profile._json.kakao_account;
    let userId = 0;
    const createdUser = await this.userReader.getUserByEmail(
      profileJsonAccount.email,
    );

    if (!createdUser)
      userId = await this.userStore.create(
        UserModel.signUpSocial({
          ...profileJsonAccount,
          nickname: profileJsonAccount.profile.nickname,
          createdAt: new Date(),
        }),
      );
    userId = createdUser.getProperties().id;

    const payload: kakaoUserType = {
      email: profileJsonAccount.email,
      nickname: profileJsonAccount.profile.nickname,
      userId,
    };
    try {
      done(null, payload);
    } catch (error) {
      done(error);
    }
  }
}
