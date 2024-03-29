type VariantType = {
  default: string;
  primary: string;
  kakao: string;
  success: string;
  ghost: string;
};

type SizeType = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: keyof VariantType;
  text: string;
  onClick?: () => void;
  width?: string;
  size: SizeType;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

// small:32, medium:48, large:56
const calculatedSizeClasses = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small': {
      return 'h-8 px-4';
    }
    case 'medium': {
      return 'h-12 px-8';
    }
    case 'large': {
      return 'h-14 px-16';
    }
  }
};

const calculatedType: VariantType = {
  default: 'bg-silver text-gray font-pretendard rounded-xl',
  primary:
    'bg-gradient-to-r from-cyan to-light-green text-gray font-spoqa rounded-2xl',
  kakao: 'bg-yellow text-gray font-spoqa rounded-2xl hover:bg-golden',
  success: 'bg-success text-white font-spoqa rounded-2xl',
  ghost:
    'bg-transparent text-gray font-pretendard border-solid border-gray border-[1px] rounded-xl active:bg-success',
};

const Button = ({
  variant = 'default',
  text,
  onClick,
  width,
  size = 'medium',
  type = 'button',
  className,
  disabled = false,
  ...restProps
}: ButtonProps) => {
  const widthStyle = width || 'auto';
  const sizeClass = calculatedSizeClasses(size);
  const colorClasses = calculatedType[variant];

  return (
    <button
      type={type}
      className={`${sizeClass} ${colorClasses} ${widthStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
