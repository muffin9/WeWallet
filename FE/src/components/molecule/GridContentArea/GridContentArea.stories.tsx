import type { Meta } from '@storybook/react';
import GridContentArea from '.';
import { useState } from 'react';
import { Categories } from '@/constants/util';

const meta: Meta<typeof GridContentArea> = {
  title: 'Primitive/GridContentArea',
  component: GridContentArea,
};

export default meta;

const PrimitiveGridContentArea = () => {
  const [categoy, setCategory] = useState('');
  return (
    <GridContentArea
      title="카테고리"
      onClick={setCategory}
      values={Categories}
      size="small"
    />
  );
};

export const Primary = {
  render: () => <PrimitiveGridContentArea />,
};
