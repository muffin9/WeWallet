import type { Meta } from '@storybook/react';
import Label from './';

const meta: Meta<typeof Label> = {
  title: 'Primitive/Label',
  component: Label,
};

export default meta;

const PrimitiveLabel = () => {
  return (
    <Label
      id="email"
      name="Email"
    />
  );
};

export const Primary = {
  render: () => <PrimitiveLabel />,
};

export const StyledLabel = {
  render: () => {
    return (
      <Label
        id="email"
        name="Email"
        color="text-yellow"
      />
    );
  },
};
