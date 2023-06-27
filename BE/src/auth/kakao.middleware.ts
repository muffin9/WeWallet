import axios from "axios";

export class KakaoMiddleWare {
  async calculatedTokenFromKakao(code: string) {
    const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=3eaba433e78b8defa58daa0fa0efbc2c&redirect_uri=http://localhost:3000/auth/kakao&code=${code}`;
    const { data } = await axios.post(tokenUrl, {
      headers: { "Content-Type": "application/json" },
    });

    if (data) return data.access_token;
    return null;
  }

  async calculatedUserFormKakao(access_token: string) {
    const userInfoUrl = "https://kapi.kakao.com/v2/user/me";

    const { data } = await axios.get(userInfoUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    return data;
  }
}
