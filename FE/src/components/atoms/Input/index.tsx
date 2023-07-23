import { VariantInputType } from '@/types/auth';

interface InputProps {
  type: string;
  name: string;
  variant?: VariantInputType;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const calculatedType = {
  default: 'border-b-silver',
  error: 'border-b-error text-error',
  success: 'border-b-success text-success',
};

const Input = ({
  type = 'text',
  name,
  variant = 'default',
  placeholder,
  onChange,
  value,
}: InputProps) => {
  const colorClasses = calculatedType[variant];
  return (
    <input
      type={type}
      name={name}
      className={`${colorClasses} w-72 h-8 border-x-0 border-b border-solid bg-transparent font-pretendard text-xl`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus
    />
  );
};

export default Input;
