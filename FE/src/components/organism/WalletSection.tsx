import useGetTransAction from '@/hooks/TransAction/useGetTransAction';
import { nowDate } from '@/utils/date';
import { useState } from 'react';
import DateInput from './DateInput';
import TransSection from './TransSection';
import { Calendar } from '../shadcn/Calendar';
import LoadingSpinner from '../atoms/LoadingSpinner';
import Info from './budget/Info';
import useCalendarStore from '@/store/useCalendarStore';

interface WalletSectionProps {
  currentPage: string;
}

const WalletSection = ({ currentPage }: WalletSectionProps) => {
  const { transActionData, isLoading } = useGetTransAction();

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between items-center">
        <DateInput currentPage={currentPage} />
      </div>
      <div className="flex justify-between items-center mt-8">
        {transActionData && <TransSection price={transActionData.all} />}
      </div>

      <div className="flex justify-center items-center mt-8">
        {currentPage === 'main' && transActionData && (
          <Calendar price={transActionData.date} />
        )}
        {currentPage === 'budget' && <Info />}
      </div>
    </div>
  );
};

export default WalletSection;
