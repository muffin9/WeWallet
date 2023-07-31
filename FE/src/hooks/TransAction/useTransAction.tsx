import { getTransAction, postTransAction } from '@/apis/transactions';
import { TRANSACTION_POST_SUCCESS } from '@/constants/status';
import { useMutation, useQuery } from '@tanstack/react-query';

const useTransAction = () => {
  const { data: transActionData, refetch: refetchTransAction } = useQuery(
    ['transAction'],
    () => getTransAction(),
    { enabled: false },
  );

  const fetchPostTransAction = useMutation(postTransAction, {
    onSuccess: ({ status }) => {
      if (status === TRANSACTION_POST_SUCCESS) {
        // refetch get transactions
      }
    },
  });

  return { transActionData, refetchTransAction, fetchPostTransAction };
};

export default useTransAction;
