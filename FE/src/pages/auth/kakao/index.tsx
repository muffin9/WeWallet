import apis from '@/apis';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

const authKakao = () => {
  const router = useRouter();
  const { code: authCode, error: kakaoServerError } = router.query;

  const loginHandler = useCallback(
    async (code: string | string[]) => {
      // 백엔드에 전송
      const response = await apis.kakaoAuth(code);

      if (response.status === 200) {
        router.push('/');
      }
    },
    [router],
  );

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);

      // 인가코드를 제대로 못 받았을 경우에 에러 페이지를 띄운다.
    } else if (kakaoServerError) {
    }
  }, [loginHandler, authCode, kakaoServerError, router]);

  return <h2>로그인 중입니다..</h2>;
};

export default authKakao;
