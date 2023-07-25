import { postLoginUser } from '@/apis/user';
import {
  USER_MISMATCH_PASSWORD,
  USER_NONE_EMAIL,
  USER_LOGIN_SUCCESS,
} from '@/constants/status';
import useModalStore from '@/store/useModalStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const useLogin = () => {
  const setType = useModalStore((state) => state.setType);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const router = useRouter();

  const fetchLoginUser = useMutation(postLoginUser, {
    onSuccess: (status: string) => {
      if (status === USER_NONE_EMAIL) {
        setType('checkEmail');
        toggleModal();
      } else if (status === USER_MISMATCH_PASSWORD) {
        setType('checkPassword');
        toggleModal();
      } else if (status === USER_LOGIN_SUCCESS) {
        router.push('/main');
      }
    },
  });

  return { fetchLoginUser };
};

export default useLogin;
