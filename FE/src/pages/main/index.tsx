import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import { isTokenExpired } from '@/utils/token';
import { deleteCookie } from '@/utils/cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { restoreAccessToken } from '@/apis/auth';
import useUserStore from '@/store/useUserStore';
import Header from '@/components/molecule/Header';
import DateInput from '@/components/organism/main/DateInput';
import TransSection from '@/components/organism/main/TransSection';
import { Calendar } from '@/components/shadcn/Calendar';
import useGetTransAction from '@/hooks/TransAction/useGetTransAction';
import { nowDate } from '@/utils/date';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

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
  const [month, setMonth] = useState(nowDate().month);
  const router = useRouter();
  const { userId } = useUserStore((state) => state.getUser)();

  const { transActionData, isLoading } = useGetTransAction(month);

  useEffect(() => {
    if (accessToken === null || refreshToken === null || userId === null)
      router.push('/login');
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <section className="w-80 h-full flex flex-col gap-y-12 bg-light-black">
      <Header />
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
          <DateInput
            month={month}
            setMonth={setMonth}
          />
        </div>
        <div className="flex justify-between items-center mt-8">
          {transActionData && <TransSection price={transActionData.all} />}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Calendar />
      </div>
    </section>
  );
};

export default main;
