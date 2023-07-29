import type { Meta } from '@storybook/react';
import BottomPopup from '.';
import Input from '../Input';
import { useState } from 'react';

const meta: Meta<typeof BottomPopup> = {
  title: 'Primitive/BottomPopup',
  component: BottomPopup,
};

export default meta;

const PrimitiveBottomPopup = () => {
  const [account, setAccount] = useState('');

  return (
    <BottomPopup>
      <Input
        type="text"
        name={account}
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />
    </BottomPopup>
  );
};

export const Primary = {
  render: () => <PrimitiveBottomPopup />,
};
