import Button from '@/components/atoms/Button';
import Modal from '@/components/atoms/Modal';
import { useState } from 'react';
import SettingBudget from './SettingBudget';
import useBudget from '@/hooks/Budget/useBudget';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

interface InfoProps {
  month: number;
}

const Info = ({ month }: InfoProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const {
    budgetLoading,
    budgetPrice,
    remainBudgetPrice,
    dailyBudgetPrice,
    RecommendedSpendingPrice,
  } = useBudget();

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
        <span className="text-white text-2xl font-bold">{}원 남음</span>
        <span className="text-silver">하루 예산 {}원</span>
      </div>
      <div className="flex flex-col mt-20 gap-4">
        <div>ProgressBar</div>
        <div className="flex justify-between text-white">
          <span>예산</span>
          <span>{}원</span>
        </div>
        <div className="flex justify-between text-white">
          <span>오늘까지 권장 지출</span>
          <span>{}원</span>
        </div>
      </div>
      {isShowModal && (
        <Modal
          size="medium"
          onCloseModal={toggleModal}
        >
          <SettingBudget month={month} />
        </Modal>
      )}
    </section>
  );
};

export default Info;
