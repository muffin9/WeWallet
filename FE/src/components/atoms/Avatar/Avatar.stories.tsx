import type { Meta } from '@storybook/react';
import Avatar from '.';
import { SampleImageUrl } from '@/constants/util';

const meta: Meta<typeof Avatar> = {
  title: 'Primitive/Avatar',
  component: Avatar,
};

export default meta;

export const Primary = {
  render: () => <Avatar imageUrl={SampleImageUrl} />,
};
