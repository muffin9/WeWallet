import type { Meta } from '@storybook/react';
import AccessLabel from '.';
import Label from '@/components/atoms/Label';
import { useState } from 'react';

const meta: Meta<typeof AccessLabel> = {
  title: 'Primitive/AccessLabel',
  component: AccessLabel,
};

export default meta;

const PrimitiveAccessLabel = () => {
  const [email, setEmail] = useState('');
  return (
    <AccessLabel
      variant="default"
      LabelComponent={
        <Label
          id={email}
          name="email"
        />
      }
    />
  );
};

export const Primary = {
  render: () => <PrimitiveAccessLabel />,
};
