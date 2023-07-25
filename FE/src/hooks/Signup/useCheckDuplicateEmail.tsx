import { useQuery } from '@tanstack/react-query';
import { checkDupliateEmail } from '@/apis/auth';
import useModalStore from '@/store/useModalStore';

const useCheckDuplicateEmail = (email: string) => {
  const setType = useModalStore((state) => state.setType);
  const toggleModal = useModalStore((state) => state.toggleModal);

  const { data: isCheckEmail, refetch: checkEmailRefetch } = useQuery(
    ['checkDuplicateEmail'],
    () => checkDupliateEmail(email),
    {
      enabled: false,
      onSuccess: (data) => {
        data ? setType('isDuplicateEmail') : setType('isNotDuplicateEmail');
        toggleModal();
      },
    },
  );

  return {
    isCheckEmail,
    checkEmailRefetch,
  };
};

export default useCheckDuplicateEmail;
