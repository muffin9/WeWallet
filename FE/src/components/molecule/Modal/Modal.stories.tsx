import type { Meta } from '@storybook/react';
import Modal from '.';
import Button from '@/components/atoms/Button';

const meta: Meta<typeof Modal> = {
  title: 'Primitive/Modal',
  component: Modal,
};

export default meta;

const PrimitiveModal = () => {
  return <Modal size="medium" />;
};

export const Primary = {
  render: () => <PrimitiveModal />,
};
