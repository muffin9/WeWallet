import { Injectable } from "@nestjs/common";
import { KakaoMiddleWare } from "./kakao.middleware";

@Injectable()
export class AuthService {
  constructor(private kakaoMiddleWare: KakaoMiddleWare) {}

  async kakaoOAuthLogin(code: string) {
    // 1. 회원조회
    // let user = await this.usersService.findOne({ email: req.user.email }); //user를 찾아서
    // 2, 회원가입이 안되어있다면? 자동회원가입
    // if (!user) user = await this.usersService.create({ ...req.user }); //user가 없으면 하나 만들고, 있으면 이 if문에 들어오지 않을거기때문에 이러나 저러나 user는 존재하는게 됨.
    // 3. 회원가입이 되어있다면? 로그인(AT, RT를 생성해서 브라우저에 전송)한다
    // res.redirect("http://localhost:3000/home");
    const accessToken = await this.kakaoMiddleWare.calculatedTokenFromKakao(
      code
    );

    const userInfo = await this.kakaoMiddleWare.calculatedUserFormKakao(
      accessToken
    );

    return userInfo;
  }
}
