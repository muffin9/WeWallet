import type { Meta } from '@storybook/react';
import SelectDate from '.';

const meta: Meta<typeof SelectDate> = {
  title: 'Primitive/SelectDate',
  component: SelectDate,
};

export default meta;

const PrimitiveSelectDate = () => {
  return (
    <SelectDate
      month={8}
      prevClick={() => console.log('prev')}
      nextClick={() => console.log('next')}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveSelectDate />,
};
