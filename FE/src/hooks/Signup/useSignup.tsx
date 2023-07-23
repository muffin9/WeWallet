import { postSignupUser } from '@/apis/user';
import { USER_CREATED } from '@/constants/status';
import useModalStore from '@/store/useModalStore';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useSignup = () => {
  const setType = useModalStore((state) => state.setType);
  const router = useRouter();

  const fetchSignupUser = useMutation(postSignupUser, {
    onSuccess: (status: string) => {
      if (status === USER_CREATED) {
        setType('signup');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    },
  });

  return { fetchSignupUser };
};

export default useSignup;