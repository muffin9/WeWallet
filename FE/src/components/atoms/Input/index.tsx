type VariantType = {
  default: string;
  error: string;
  success: string;
};

interface InputProps {
  type: string;
  variant?: keyof VariantType;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const calculatedType: VariantType = {
  default: 'border-b-silver',
  error: 'border-b-error',
  success: 'border-b-success',
};

const Input = ({
  type = 'text',
  variant = 'default',
  placeholder,
  onChange,
  value,
}: InputProps) => {
  const colorClasses = calculatedType[variant];
  return (
    <input
      type={type}
      className={`${colorClasses} w-72 h-8 border-x-0 border-b border-solid bg-transparent font-pretendard text-xl`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus
    />
  );
};

export default Input;
