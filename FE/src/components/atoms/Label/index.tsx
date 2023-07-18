import * as LabelPrimitive from '@radix-ui/react-label';

type LabelProps = {
  id: string;
  name: string;
  color?: string;
};

const Label = ({
  id,
  name,
  color = 'text-black',
  ...restProps
}: LabelProps) => {
  return (
    <LabelPrimitive.Root
      htmlFor={id}
      className={`${color} font-pretendard text-xs`}
      {...restProps}
    >
      {name}
    </LabelPrimitive.Root>
  );
};

export default Label;
