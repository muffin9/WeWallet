import type { Meta } from '@storybook/react';
import AccessInput from '.';
import Input from '@/components/atoms/Input';
import { useState } from 'react';

const meta: Meta<typeof AccessInput> = {
  title: 'Primitive/AccessInput',
  component: AccessInput,
};

export default meta;

const PrimitiveAccessInput = () => {
  const [email, setEmail] = useState('');
  return (
    <AccessInput
      variant="default"
      InputComponent={
        <Input
          type="text"
          name="email"
          variant="default"
          placeholder="이메일을 입력해주세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
        />
      }
      onResetValue={() => setEmail('')}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveAccessInput />,
};
