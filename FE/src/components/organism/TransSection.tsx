import Button from '@/components/atoms/Button';
import BudgetText from '@/components/molecule/BudgetText';
import AddTranModal from './main/AddTranModal';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface TransSectionProps {
  price: { INCOME: number; EXPENDITURE: number };
}

const TransSection = ({ price }: TransSectionProps) => {
  const router = useRouter();
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <>
      <BudgetText
        income={price.INCOME}
        expenditure={price.EXPENDITURE}
      />
      <div className="flex gap-x-4">
        <Button
          size="small"
          text="분석"
          className="rounded-md text-xs"
          onClick={() => router.push('/analysis')}
        />
        <Button
          variant="primary"
          size="small"
          text="내역추가"
          className="rounded-md text-xs"
          onClick={toggleModal}
        />
      </div>
      {isShowModal && <AddTranModal onCloseModal={toggleModal} />}
    </>
  );
};

export default TransSection;
