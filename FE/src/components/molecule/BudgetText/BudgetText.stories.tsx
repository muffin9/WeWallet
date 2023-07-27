import type { Meta } from '@storybook/react';
import BudgetText from './';

const meta: Meta<typeof BudgetText> = {
  title: 'Primitive/BudgetText',
  component: BudgetText,
};

export default meta;

const PrimitiveBudgetText = () => {
  return (
    <BudgetText
      income={1075331}
      expenditure={1000}
    />
  );
};

export const Primary = {
  render: () => <PrimitiveBudgetText />,
};
