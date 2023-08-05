import useGetTransAction from '@/hooks/TransAction/useGetTransAction';
import { nowDate } from '@/utils/date';
import { useState } from 'react';
import DateInput from './main/DateInput';
import TransSection from './main/TransSection';
import { Calendar } from '../shadcn/Calendar';
import LoadingSpinner from '../atoms/LoadingSpinner';

interface WalletSectionProps {
  currentPage: string;
}

const WalletSection = ({ currentPage }: WalletSectionProps) => {
  const [month, setMonth] = useState(nowDate().month);

  const { transActionData, isLoading } = useGetTransAction(month);

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between items-center">
        <DateInput
          month={month}
          setMonth={setMonth}
          currentPage={currentPage}
        />
      </div>
      <div className="flex justify-between items-center mt-8">
        {transActionData && <TransSection price={transActionData.all} />}
      </div>

      <div className="flex justify-center items-center mt-8">
        {currentPage === 'main' && transActionData && (
          <Calendar price={transActionData.date} />
        )}
        {currentPage === 'budget' && <div>예산 WIPS</div>}
      </div>
    </div>
  );
};

export default WalletSection;
