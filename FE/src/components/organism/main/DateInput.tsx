import Button from '@/components/atoms/Button';
import SelectDate from '@/components/molecule/SelectDate';
import { useRouter } from 'next/router';

const DateInput = () => {
  const router = useRouter();
  const month = 8;
  const prevClick = () => {
    console.log('clicked prev result : 7');
  };
  const nextClick = () => {
    console.log('clicked next result : 9');
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
