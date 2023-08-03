import { getTransAction, postTransAction } from '@/apis/transactions';
import { TRANSACTION_POST_SUCCESS } from '@/constants/status';
import useModalStore from '@/store/useModalStore';
import { useMutation, useQuery } from '@tanstack/react-query';

const useTransAction = () => {
  const setType = useModalStore((state) => state.setType);
  const toggleModal = useModalStore((state) => state.toggleModal);

  const { data: transActionData, refetch: refetchTransAction } = useQuery(
    ['transAction'],
    () => getTransAction(),
    { enabled: false },
  );

  const fetchPostTransAction = useMutation(postTransAction, {
    onSuccess: ({ status }) => {
      if (status === TRANSACTION_POST_SUCCESS) {
        setType('transactionSuccess');
        toggleModal();
      }
    },
  });

  return { transActionData, refetchTransAction, fetchPostTransAction };
};

export default useTransAction;
