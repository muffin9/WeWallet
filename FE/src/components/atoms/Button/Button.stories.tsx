import type { Meta } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Primitive/Button',
  component: Button,
};

export default meta;

const PrimitiveButton = () => {
  return (
    <Button
      variant="kakao"
      text="카카오 로그인"
      size="large"
      width="w-80"
    />
  );
};

export const Primary = {
  render: () => <PrimitiveButton />,
};
