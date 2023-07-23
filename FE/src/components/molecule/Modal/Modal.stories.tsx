import type { Meta } from '@storybook/react';
import Modal from '.';
import Button from '@/components/atoms/Button';

const meta: Meta<typeof Modal> = {
  title: 'Primitive/Modal',
  component: Modal,
};

export default meta;

const PrimitiveModal = () => {
  return (
    <Modal size="medium">
      <div className="mt-auto">
        <Button
          variant="success"
          text="확인"
          size="medium"
          width="w-60"
        />
      </div>
    </Modal>
  );
};

export const Primary = {
  render: () => <PrimitiveModal />,
};
