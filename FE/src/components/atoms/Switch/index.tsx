import * as SwitchPrimitive from '@radix-ui/react-switch';

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = ({
  id,
  checked,
  onCheckedChange,
  ...restProps
}: SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...restProps}
      className="w-[42px] h-[25px] bg-silver rounded-full relative data-[state=checked]:bg-black outline-none cursor-pointer"
    >
      <SwitchPrimitive.Thumb className="block w-[21px] h-[21px] bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
