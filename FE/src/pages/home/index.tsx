import Avatar from '@/components/atoms/Avatar';
import { SampleImageUrl } from '@/constants/util';

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
      redirectUri: `${process.env.API_URL}/auth/kakao/callback`,
    });
  };

  return (
    <div>
      <Avatar imageUrl={SampleImageUrl} />
      <button
        type="button"
        onClick={kakaoLogin}
      >
        카톡으로 로그인
      </button>
    </div>
  );
};

export default home;
