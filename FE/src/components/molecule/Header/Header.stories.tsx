import type { Meta } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'Primitive/Header',
  component: Header,
};

export default meta;

const PrimitiveHeader = () => {
  return <Header />;
};

export const Primary = {
  render: () => <PrimitiveHeader />,
};
