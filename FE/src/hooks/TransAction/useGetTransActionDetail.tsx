import { getTransActionDetail } from '@/apis/transactions';
import { useQuery } from '@tanstack/react-query';

interface useGetTransActionDetailProps {
  month: number;
  day: number;
}

const useGetTransActionDetail = ({
  month,
  day,
}: useGetTransActionDetailProps) => {
  const { data: transActionDetailData, isLoading: transActionDetailLoading } =
    useQuery(['getTransActionDetail', month, day], () =>
      getTransActionDetail(month, day),
    );

  return { transActionDetailData, transActionDetailLoading };
};

export default useGetTransActionDetail;
