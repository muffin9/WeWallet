import Button from '@/components/atoms/Button';
import Modal from '@/components/atoms/Modal';
import { useState } from 'react';
import SettingBudget from './SettingBudget';
import useBudget from '@/hooks/Budget/useBudget';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import ProgressBar from '@/components/atoms/ProgressBar';

interface InfoProps {
  month: number;
}

const Info = ({ month }: InfoProps) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const {
    budgetLoading,
    totalPrice,
    remainBudgetPrice,
    dailyBudgetPrice,
    recommendedSpendingPrice,
  } = useBudget(month);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  if (budgetLoading) return <LoadingSpinner size="large" />;

  return (
    <section className="w-full  flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-white font-bold">한 달 예산</span>
        <Button
          variant="primary"
          size="small"
          text="설정"
          className="text-xs"
          onClick={toggleModal}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-cyan text-2xl font-bold">
          {remainBudgetPrice}원 남음
        </span>
        <span className="text-silver">하루 예산 {dailyBudgetPrice}원</span>
      </div>
      <div className="flex flex-col mt-20 gap-4">
        <div className="relative flex flex-col">
          {/* <div className="absolute top-0 left-0 flex flex-col items-center w-14">
            <Button
              variant="ghost"
              size="small"
              text="권장"
              className="text-silver text-xs"
            />
            <div className="border-cyan border-dashed border-[1px] h-4"></div>
          </div> */}
          <div className="relative">
            <ProgressBar
              value={
                recommendedSpendingPrice ? recommendedSpendingPrice / 100 : 0
              }
            />
            <span className="absolute left-0 top-0 translate-x-2/4 translate-y-1/4 text-xs text-white">
              {recommendedSpendingPrice ? recommendedSpendingPrice / 100 : 0}
            </span>
          </div>
        </div>
        <div className="flex justify-between text-white">
          <span>예산</span>
          <span>{totalPrice}원</span>
        </div>
        <div className="flex justify-between text-white">
          <span>오늘까지 권장 지출</span>
          <span>{recommendedSpendingPrice}원</span>
        </div>
      </div>
      {isShowModal && (
        <Modal
          size="large"
          onCloseModal={toggleModal}
          className="h-auto"
        >
          <SettingBudget
            month={month}
            onCloseModal={toggleModal}
          />
        </Modal>
      )}
    </section>
  );
};

export default Info;
