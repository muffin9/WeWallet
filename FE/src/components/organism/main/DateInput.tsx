import Button from '@/components/atoms/Button';
import SelectDate from '@/components/molecule/SelectDate';
import { useRouter } from 'next/router';

interface DateInputProps {
  month: number;
  setMonth: (month: number) => void;
}

const DateInput = ({ month, setMonth }: DateInputProps) => {
  const router = useRouter();
  const prevClick = () => {
    if (month === 1) return;
    setMonth(month - 1);
  };
  const nextClick = () => {
    if (month === 12) return;
    setMonth(month + 1);
  };

  return (
    <>
      <SelectDate
        month={month}
        prevClick={prevClick}
        nextClick={nextClick}
      />
      <Button
        type="button"
        size="small"
        onClick={() => router.push('/budget')}
        text="예산"
        className="rounded-md"
      />
    </>
  );
};

export default DateInput;
