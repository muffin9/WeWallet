import { useState } from 'react';
import AddTranModal from './AddTranModal';
import DateDetailSection from './DateDetailSection';
import useCalendarStore from '@/store/useCalendarStore';
import useGetTransActionDetail from '@/hooks/TransAction/useGetTransActionDetail';
import LoadingSpinner from '../atoms/LoadingSpinner';
import { TransDetailInfoType } from '@/types/transaction';

interface DateDetailContainerProps {
  day: number;
  onCloseModal: () => void;
}

const DateDetailContainer = ({
  day,
  onCloseModal,
}: DateDetailContainerProps) => {
  const [isClickedDetail, setIsClickedDetail] = useState(false);
  const [clickedDetailId, setClickedDetailId] = useState(0);

  const month = useCalendarStore((state) => state.month);

  const { transActionDetailData, transActionDetailLoading } =
    useGetTransActionDetail({ month, day });

  const handleClickDetailInfo = (id: number) => {
    setClickedDetailId(id);

    setIsClickedDetail(true);
  };

  if (transActionDetailLoading) return <LoadingSpinner size="medium" />;

  return isClickedDetail ? (
    <AddTranModal
      onCloseModal={onCloseModal}
      clickedDetailData={transActionDetailData.detailInfos.find(
        (detailInfo: TransDetailInfoType) => detailInfo.id === clickedDetailId,
      )}
    />
  ) : (
    <DateDetailSection
      transActionDetailData={transActionDetailData}
      handleClickDetailInfo={handleClickDetailInfo}
    />
  );
};

export default DateDetailContainer;
