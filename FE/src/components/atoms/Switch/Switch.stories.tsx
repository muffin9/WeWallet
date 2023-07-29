import type { Meta } from '@storybook/react';
import Switch from './';

const meta: Meta<typeof Switch> = {
  title: 'Primitive/Switch',
  component: Switch,
};

export default meta;

const PrimitiveSwitch = () => {
  return <Switch id="isBudget" />;
};

export const Primary = {
  render: () => <PrimitiveSwitch />,
};
