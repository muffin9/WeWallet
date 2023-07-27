import type { Meta } from '@storybook/react';
import ResponseModal from '.';

const meta: Meta<typeof ResponseModal> = {
  title: 'Primitive/ResponseModal',
  component: ResponseModal,
};

export default meta;

const PrimitiveResponseModal = () => {
  return <ResponseModal />;
};

export const Primary = {
  render: () => <PrimitiveResponseModal />,
};
