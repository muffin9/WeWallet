import { CategoryType } from '@/types/category';

type SizeType = 'small' | 'medium' | 'large';

interface GridContentAreaProps {
  title: string;
  size?: SizeType;
  values: {
    [key: string]: CategoryType;
  }[];
  onClick: (clickId: number) => void;
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
      {values.map(({ category }) => (
        <>
          <div
            className="flex flex-col items-center flex-wrap gap-y-2 cursor-pointer"
            key={category.category_id}
            onClick={() => onClick(category.category_id)}
          >
            <img
              width={32}
              height={32}
              src={`${process.env.API_URL}/${category.category_image_url}`}
            />
            <span className="text-xs text-success">
              {category.category_name}
            </span>
          </div>
        </>
      ))}
    </div>
  );
};

export default GridContentArea;
