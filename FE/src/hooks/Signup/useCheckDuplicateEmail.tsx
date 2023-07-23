import { useQuery } from '@tanstack/react-query';
import { checkDupliateEmail } from '@/apis/auth';
import { useState } from 'react';

const useCheckDuplicateEmail = (email: string) => {
  const [isDuplicateEmailModal, setIsDuplicateEmailModal] = useState(false);
  const { isLoading: checkEmailLoading, refetch: checkEmailRefetch } = useQuery(
    ['checkDuplicateEmail'],
    () => checkDupliateEmail(email),
    {
      enabled: false,
      onSuccess: (data) => {
        // loading -> Popup inner loading ?
        if (data) return true;
        setIsDuplicateEmailModal(true);
      },
    },
  );

  return {
    isDuplicateEmailModal,
    setIsDuplicateEmailModal,
    checkEmailLoading,
    checkEmailRefetch,
  };
};

export default useCheckDuplicateEmail;
