import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  value: number;
  maxValue?: number;
  bgColor?: string;
  innerColor?: string;
  getValueLabel?: (value: number, maxValue: number) => string;
}

const ProgressBar = ({
  value,
  maxValue,
  bgColor = 'bg-white',
  innerColor = 'bg-cyan',
  getValueLabel,
}: ProgressBarProps) => {
  return (
    <Progress.Root
      className={`relative overflow-hidden ${bgColor} rounded-2xl w-[288px] h-[25px]`}
      value={value}
      max={maxValue}
      getValueLabel={getValueLabel}
      style={{
        transform: 'translateZ(0)',
      }}
    >
      <Progress.Indicator
        className={`${innerColor} w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
