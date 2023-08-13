import type { Meta } from '@storybook/react';
import GridContentArea from '.';
import { action } from '@storybook/addon-actions';

const Categories = [{}];

const meta: Meta<typeof GridContentArea> = {
  title: 'Primitive/GridContentArea',
  component: GridContentArea,
};

export default meta;

const PrimitiveGridContentArea = () => {
  return (
    <GridContentArea
      title="카테고리"
      onClick={action('clicked')}
      values={Categories}
      size="small"
    />
  );
};

export const Primary = {
  render: () => <PrimitiveGridContentArea />,
};
