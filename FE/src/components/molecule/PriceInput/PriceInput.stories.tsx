import type { Meta } from '@storybook/react';
import PriceInput from '.';
import { useState } from 'react';

const meta: Meta<typeof PriceInput> = {
  title: 'Primitive/PriceInput',
  component: PriceInput,
};

export default meta;

const PrimitivePriceInput = () => {
  const [value, setValue] = useState('');
  return (
    <PriceInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Primary = {
  render: () => <PrimitivePriceInput />,
};
