import { postTransAction } from '@/apis/transactions';
import { TRANSACTION_POST_SUCCESS } from '@/constants/status';
import useModalStore from '@/store/useModalStore';
import { useMutation } from '@tanstack/react-query';
import useGetTransAction from './useGetTransAction';
import useBudget from '../Budget/useBudget';

const useTransAction = () => {
  const setType = useModalStore((state) => state.setType);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const { refetchTransAction } = useGetTransAction();
  const { refetchBugetInfo } = useBudget();

  const fetchPostTransAction = useMutation(postTransAction, {
    onSuccess: ({ status }) => {
      if (status === TRANSACTION_POST_SUCCESS) {
        setType('transactionSuccess');
        refetchTransAction();
        refetchBugetInfo();
        toggleModal();
      }
    },
  });

  return { fetchPostTransAction };
};

export default useTransAction;
