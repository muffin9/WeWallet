import type { Meta } from '@storybook/react';
import ScrollArea from '.';
import { PaymentMethods } from '@/constants/util';
import { useState } from 'react';

const meta: Meta<typeof ScrollArea> = {
  title: 'Primitive/ScrollArea',
  component: ScrollArea,
};

export default meta;

const PrimitiveScrollArea = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <ScrollArea
      title="결제 수단"
      values={PaymentMethods}
      onClick={setPaymentMethod}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveScrollArea />,
};
