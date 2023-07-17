import Avatar from '@/components/atoms/Avatar';
import Button from '@/components/atoms/Button';
import { SampleImageUrl } from '@/constants/util';

const home = () => {
  return (
    <div>
      <Avatar imageUrl={SampleImageUrl} />
      <Button
        variant="kakao"
        size="large"
        text="카카오 로그인"
        width="w-80"
      />
    </div>
  );
};

export default home;
