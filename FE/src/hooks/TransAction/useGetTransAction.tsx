import { getTransAction } from '@/apis/transactions';
import useCalendarStore from '@/store/useCalendarStore';
import { useQuery } from '@tanstack/react-query';

const useGetTransAction = () => {
  const month = useCalendarStore((state) => state.month);

  const {
    data: transActionData,
    isLoading,
    refetch: refetchTransAction,
  } = useQuery(['getTransAction', month], () => getTransAction(month));

  return { transActionData, isLoading, refetchTransAction };
};

export default useGetTransAction;
