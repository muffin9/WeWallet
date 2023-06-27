import { Controller, Post, HttpCode, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("/api/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {
    console.log(process.env.KAKAO_SHARE_KEY);
  }

  @Post("/kakao")
  @HttpCode(200)
  async kakaoLogin(@Body("code") code) {
    return this.authService.kakaoOAuthLogin(code);
  }
}
