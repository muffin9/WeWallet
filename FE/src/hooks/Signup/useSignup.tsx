import { postSignupUser } from '@/apis/user';
import { USER_CREATED } from '@/constants/status';
import useModalStore from '@/store/useModalStore';
import useUserStore from '@/store/useUserStore';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useSignup = () => {
  const setType = useModalStore((state) => state.setType);
  const setUser = useUserStore((state) => state.setUser);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const router = useRouter();

  const fetchSignupUser = useMutation(postSignupUser, {
    onSuccess: ({ user, status }) => {
      if (status === USER_CREATED) {
        setUser(user);
        setType('signup', () => {
          router.push('/main');
          toggleModal();
        });
        toggleModal();
      }
    },
  });

  return { fetchSignupUser };
};

export default useSignup;
