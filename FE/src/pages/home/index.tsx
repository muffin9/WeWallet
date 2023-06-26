import apis from '@/apis';

const home = () => {
  const kakaoLogin = async () => {
    await apis.kakaoAuth();
  };

  return (
    <div>
      {' '}
      <button onClick={kakaoLogin}>카톡으로 로그인</button>
    </div>
  );
};

export default home;
