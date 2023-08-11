import { postOrPatchTransAction, deleteTransAction } from '@/apis/transactions';
import {
  TRANSACTION_PATCH_SUCCESS,
  TRANSACTION_POST_SUCCESS,
  TRANSACTION_DELETE_SUCCESS,
} from '@/constants/status';
import useModalStore from '@/store/useModalStore';
import { useMutation } from '@tanstack/react-query';
import useGetTransAction from './useGetTransAction';
import useBudget from '../Budget/useBudget';
import { TypeTransactions } from '@/components/organism/AddTranModal';

const useTransAction = () => {
  const setType = useModalStore((state) => state.setType);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const { refetchTransAction } = useGetTransAction();
  const { refetchBugetInfo } = useBudget();

  const fetchPostTransAction = useMutation(
    (args: [TypeTransactions, number | undefined]) =>
      postOrPatchTransAction(...args),
    {
      onSuccess: ({ status }) => {
        if (status === TRANSACTION_POST_SUCCESS) {
          setType('transactionPostSuccess');
        } else if (status === TRANSACTION_PATCH_SUCCESS) {
          setType('transactionPatchSuccess');
        }
        refetchTransAction();
        refetchBugetInfo();
        toggleModal();
      },
    },
  );

  const deleteTransAtion = useMutation(deleteTransAction, {
    onSuccess: ({ status }) => {
      if (status === TRANSACTION_DELETE_SUCCESS) {
        setType('transactionDeleteSuccess');
      }
      refetchTransAction();
      refetchBugetInfo();
      toggleModal();
    },
  });

  return { fetchPostTransAction, deleteTransAtion };
};

export default useTransAction;
