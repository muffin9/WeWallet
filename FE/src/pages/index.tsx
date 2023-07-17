import Button from '@/components/atoms/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
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
    <>
      <section className="h-full py-14 flex flex-col justify-center">
        <div className="flex justify-center mb-20">
          <Image
            src={'/images/logo.png'}
            width={70}
            height={80}
            alt="Wewallet Logo"
          />
        </div>
        <header className="flex flex-col gap-y-4">
          <h1 className="main-title">Wewallet!</h1>
          <h1 className="main-title">생활습관</h1>
          <h1 className="main-title">만들어 드립니다!</h1>
        </header>
        <div className="flex flex-col gap-y-4 mt-auto">
          <Button
            variant="kakao"
            size="large"
            onClick={kakaoLogin}
            text="카카오 로그인"
            width="w-80"
          />
          <Button
            variant="primary"
            size="large"
            text="회원가입"
            width="w-80"
          />
          <p
            className="text-silver text-sm text-center cursor-pointer"
            onClick={() => router.push('/login')}
          >
            이미 Wewallet 계정이 있나요? 로그인
          </p>
        </div>
      </section>
    </>
  );
}
