import { getTransAction } from '@/apis/transactions';
import { useQuery } from '@tanstack/react-query';

const useGetTransAction = (month: number) => {
  const {
    data: transActionData,
    isLoading,
    refetch: refetchTransAction,
  } = useQuery(['getTransAction'], () => getTransAction(month));

  return { transActionData, isLoading, refetchTransAction };
};

export default useGetTransAction;
