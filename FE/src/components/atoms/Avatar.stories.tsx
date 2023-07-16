import type { Meta } from '@storybook/react';
import AvatarDemo from './Avatar';

const meta: Meta<typeof AvatarDemo> = {
  title: 'Primitive/AvatarDemo',
  component: AvatarDemo,
};

export default meta;

export const Primary = {
  render: () => <AvatarDemo />,
};
