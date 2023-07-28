import type { Meta } from '@storybook/react';
import Modal from '.';

const meta: Meta<typeof Modal> = {
  title: 'Primitive/Modal',
  component: Modal,
};

export default meta;

const PrimitiveModal = () => {
  return (
    <Modal
      size="medium"
      onCloseModal={() => console.log('close modal!')}
    >
      <div>Modal!!</div>
    </Modal>
  );
};

export const Primary = {
  render: () => <PrimitiveModal />,
};
