import { SVGIcon } from '@/components/atoms/Icon';
import { checkImagePath } from '@/constants/url';
import { VariantInputType } from '@/types/auth';

interface AccessLabelProps {
  variant?: VariantInputType;
  LabelComponent: React.ReactNode;
}

const AccessLabel = ({
  variant = 'default',
  LabelComponent,
}: AccessLabelProps) => {
  return (
    <div className="flex gap-x-2">
      {LabelComponent}
      <SVGIcon
        variant={variant}
        width={24}
        height={24}
        d={checkImagePath}
      />
    </div>
  );
};

export default AccessLabel;
