import type { Meta } from '@storybook/react';
import ClickSelectBox from './';
import Button from '@/components/atoms/Button';
import ClickBox from '@/components/atoms/ClickBox';

const meta: Meta<typeof ClickSelectBox> = {
  title: 'Primitive/ClickSelectBox',
  component: ClickSelectBox,
};

export default meta;

const PrimitiveClickSelectBox = () => {
  return (
    <ClickSelectBox
      id="type"
      name="분류"
    >
      <ClickBox
        placeholder="선택하세요"
        callbackFunc={() => console.log('callback Func!')}
      />
    </ClickSelectBox>
  );
};

export const Primary = {
  render: () => <PrimitiveClickSelectBox />,
};

export const TypeClickSelectBox = {
  render: () => (
    <ClickSelectBox
      id="type"
      name="분류"
    >
      <div className="flex gap-2">
        <Button
          size="small"
          variant="primary"
          text="지출"
        />
        <Button
          size="small"
          variant="primary"
          text="수입"
        />
      </div>
    </ClickSelectBox>
  ),
};
