import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ScrollArea from '.';
import { PaymentMethods } from '@/constants/util';

const meta: Meta<typeof ScrollArea> = {
  title: 'Primitive/ScrollArea',
  component: ScrollArea,
};

export default meta;

const PrimitiveScrollArea = () => {
  return (
    <ScrollArea
      title="결제 수단"
      values={PaymentMethods}
      onClick={action('clicked')}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveScrollArea />,
};
