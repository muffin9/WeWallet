import { SVGIcon } from '@/components/atoms/Icon';
import { arrowRightImagePath } from '@/constants/url';

interface ClickBoxProps {
  placeholder: string;
  isRightIcon?: boolean;
  callbackFunc: () => void;
}

const ClickBox = ({
  placeholder,
  isRightIcon = true,
  callbackFunc,
}: ClickBoxProps) => {
  return (
    <div
      onClick={callbackFunc}
      className="w-full flex justify-between curor-pointer"
    >
      <span className="text-placeholder">{placeholder}</span>
      {isRightIcon && (
        <SVGIcon
          width={24}
          height={24}
          d={arrowRightImagePath}
        />
      )}
    </div>
  );
};

export default ClickBox;
