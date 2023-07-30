import { SVGIcon } from '@/components/atoms/Icon';

interface SelectDateProps {
  month: number;
  prevClick: () => void;
  nextClick: () => void;
}

const SelectDate = ({ month, prevClick, nextClick }: SelectDateProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <div
        onClick={prevClick}
        className="cursor-pointer"
      >
        <SVGIcon
          variant="default"
          width={20}
          height={30}
          d={['M14 26L2 14L14 2V26Z']}
        />
      </div>
      <div className="flex items-center text-white text-lg">{month} 월</div>
      <div
        onClick={nextClick}
        className="cursor-pointer"
      >
        <SVGIcon
          variant="default"
          width={20}
          height={30}
          d={['M2 2L14 14L2 26V2Z']}
        />
      </div>
    </div>
  );
};

export default SelectDate;
