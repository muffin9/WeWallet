import type { Meta } from '@storybook/react';
import ProgressBar from './';

const meta: Meta<typeof ProgressBar> = {
  title: 'Primitive/ProgressBar',
  component: ProgressBar,
};

export default meta;

const PrimitiveProgressBar = () => {
  return <ProgressBar value={10} />;
};

export const Primary = {
  render: () => <PrimitiveProgressBar />,
};
