import Label from '@/components/atoms/Label';

interface BudgetTextProps {
  income: number;
  expenditure: number;
}

const BudgetText = ({ expenditure, income }: BudgetTextProps) => {
  return (
    <div className="flex flex-col text-xl font-bold font-spoqa">
      <div className="flex items-center gap-x-4">
        <Label
          id="expenditure"
          name="지출"
          color="text-white"
        />
        <span className="text-white">{expenditure}원</span>
      </div>
      <div className="flex items-center gap-x-4">
        <Label
          id="income"
          name="수입"
          color="text-white"
        />
        <span className="text-cyan">{income}원</span>
      </div>
    </div>
  );
};

export default BudgetText;
