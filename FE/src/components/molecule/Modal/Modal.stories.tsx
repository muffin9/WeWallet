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
    <Modal
      title="이메일을 확인해 주세요!"
      description="해당 이메일로 등록된 회원이 없어요."
      size="medium"
    >
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
