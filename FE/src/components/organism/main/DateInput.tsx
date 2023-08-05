import Button from '@/components/atoms/Button';
import SelectDate from '@/components/molecule/SelectDate';
import { useRouter } from 'next/router';

interface DateInputProps {
  month: number;
  setMonth: (month: number) => void;
  currentPage: string;
}

const DateInput = ({ month, setMonth, currentPage }: DateInputProps) => {
  const router = useRouter();
  const prevClick = () => {
    if (month === 1) return;
    setMonth(month - 1);
  };
  const nextClick = () => {
    if (month === 12) return;
    setMonth(month + 1);
  };

  const calculatedButton = (currentPage: string) => {
    const data = {
      onClick: () => {
        router.push('/login');
      },
      text: '',
    };

    switch (currentPage) {
      case 'main':
        data.onClick = () => router.push('/budget');
        data.text = '예산';
        return data;
      case 'budget':
        data.onClick = () => router.push('/main');
        data.text = '달력';
        return data;
    }

    return data;
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
        onClick={calculatedButton(currentPage).onClick}
        text={calculatedButton(currentPage).text}
        className="rounded-md"
      />
    </>
  );
};

export default DateInput;
