import { useQuery } from '@tanstack/react-query';
import { checkDupliateEmail } from '@/apis/auth';
import useModalStore from '@/store/useModalStore';

const useCheckDuplicateEmail = (email: string) => {
  const setType = useModalStore((state) => state.setType);

  const { refetch: checkEmailRefetch } = useQuery(
    ['checkDuplicateEmail'],
    () => checkDupliateEmail(email),
    {
      enabled: false,
      onSuccess: (data) => {
        data ? setType('isDuplicateEmail') : setType('isNotDuplicateEmail');
      },
    },
  );

  return {
    checkEmailRefetch,
  };
};

export default useCheckDuplicateEmail;
