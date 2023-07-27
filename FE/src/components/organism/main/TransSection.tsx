import Button from '@/components/atoms/Button';
import BudgetText from '@/components/molecule/BudgetText';

const TransSection = () => {
  return (
    <>
      <BudgetText
        income={1000}
        expenditure={1000}
      />
      <div className="flex gap-x-4">
        <Button
          size="small"
          text="분석"
          className="rounded-md text-xs"
        />
        <Button
          variant="primary"
          size="small"
          text="내역추가"
          className="rounded-md text-xs"
        />
      </div>
    </>
  );
};

export default TransSection;
