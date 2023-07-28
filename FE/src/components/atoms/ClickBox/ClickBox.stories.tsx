import type { Meta } from '@storybook/react';
import ClickBox from '.';

const meta: Meta<typeof ClickBox> = {
  title: 'Primitive/ClickBox',
  component: ClickBox,
};

export default meta;

const PrimitiveClickBox = () => {
  return (
    <ClickBox
      placeholder="미분류"
      callbackFunc={() => console.log('callbackFunc')}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveClickBox />,
};
