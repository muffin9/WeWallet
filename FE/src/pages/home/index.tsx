const home = () => {
  const kakaoInit = () => {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.KAKAO_SHARE_KEY);
    }

    return kakao;
  };

  const kakaoLogin = () => {
    const kakao = kakaoInit();
    kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/auth/kakao',
    });
  };

  return (
    <div>
      <button onClick={kakaoLogin}>카톡으로 로그인</button>
    </div>
  );
};

export default home;
