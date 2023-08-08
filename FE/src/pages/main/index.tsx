import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { isTokenExpired } from '@/utils/token';
import { deleteCookie } from '@/utils/cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { restoreAccessToken } from '@/apis/auth';
import useUserStore from '@/store/useUserStore';
import Header from '@/components/molecule/Header';
import WalletSection from '@/components/organism/WaleltSection';

interface mainProps {
  accessToken: string | null;
  refreshToken: string | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const cookies = parse(req.headers.cookie || '');

  const accessToken = cookies['access-token'] || null;
  const refreshToken = cookies['refresh-token'] || null;

  const isAccessTokenExpired = isTokenExpired(accessToken);
  const isRefreshTokenExpired = isTokenExpired(refreshToken);

  if (isRefreshTokenExpired) {
    res.setHeader('Set-Cookie', [
      deleteCookie('access-token'),
      deleteCookie('refresh-token'),
    ]);
  }

  if (refreshToken && isAccessTokenExpired) {
    restoreAccessToken(refreshToken);
  }

  return {
    props: {
      accessToken,
      refreshToken,
    },
  };
};

const main = ({ accessToken, refreshToken }: mainProps) => {
  const router = useRouter();
  const { userId } = useUserStore((state) => state.getUser)();

  useEffect(() => {
    if (accessToken === null || refreshToken === null || userId === null)
      router.push('/login');
  }, []);

  return (
    <section className="w-80 h-full flex flex-col gap-y-12 bg-light-black">
      <Header />
      <WalletSection currentPage="main" />
    </section>
  );
};

export default main;
