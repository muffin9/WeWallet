type VariantType = 'default' | 'error' | 'success';

interface SVGIconProps {
  variant?: VariantType;
  width: number;
  height: number;
  d?: string;
}

const calcualtedType = {
  default: 'text-gray',
  error: 'text-error',
  success: 'text-success',
};

export const SVGIcon = ({
  variant = 'default',
  width,
  height,
  d,
}: SVGIconProps) => {
  const colorClasses = calcualtedType[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`${colorClasses} flex items-center fill-current`}
    >
      <path d={d} />
    </svg>
  );
};
