import { SVGIcon } from '@/components/atoms/Icon';
import { closeImagePath } from '@/constants/url';
import { VariantInputType } from '@/types/auth';

interface AccessInputProps {
  variant?: VariantInputType;
  InputComponent: React.ReactNode;
  onResetValue: () => void;
}

const AccessInput = ({
  variant = 'default',
  InputComponent,
  onResetValue,
}: AccessInputProps) => {
  return (
    <div className="w-72 relative">
      {InputComponent}
      <div
        onClick={onResetValue}
        className="absolute top-0 right-0"
      >
        <SVGIcon
          variant={variant}
          width={24}
          height={24}
          d={closeImagePath}
        />
      </div>
    </div>
  );
};

export default AccessInput;
