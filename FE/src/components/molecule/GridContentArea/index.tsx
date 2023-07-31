import { SVGIcon } from '@/components/atoms/Icon';

type SizeType = 'small' | 'medium' | 'large';

interface GridContentAreaProps {
  title: string;
  size?: SizeType;
  values: { [key: string]: { name: string; imagePath: string[] } };
  onClick: (key: string) => void;
}

const calculatedSize = (size: SizeType) => {
  switch (size) {
    case 'small':
      return 'grid-cols-4 gap-4';
    case 'medium':
      return 'grid-cols-8 gap-8';
    case 'large':
      return 'grid-cols-12 gap-12';
  }
};

const GridContentArea = ({
  onClick,
  size = 'small',
  values,
}: GridContentAreaProps) => {
  return (
    <div className={`${calculatedSize(size)} grid`}>
      {Object.entries(values).map(([key, value]) => (
        <>
          <div
            className="flex flex-col items-center flex-wrap gap-y-2 cursor-pointer"
            key={key}
            onClick={() => onClick(key)}
          >
            <SVGIcon
              width={32}
              height={32}
              variant="default"
              d={value.imagePath}
            />
            <span className="text-xs text-success">{value.name}</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default GridContentArea;
