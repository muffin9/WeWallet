import type { Meta } from '@storybook/react';
import Input from '.';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Primitive/Input',
  component: Input,
};

export default meta;

const PrimitiveInput = () => {
  const [email, setEmail] = useState('');

  return (
    <Input
      type="text"
      variant="default"
      placeholder="이메일을 입력해주세요."
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)
      }
      value={email}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveInput />,
};

export const SuccessInput = {
  render: () => {
    const [email, setEmail] = useState('');
    return (
      <Input
        type="text"
        variant="success"
        placeholder="이메일을 입력해주세요."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
      />
    );
  },
};
