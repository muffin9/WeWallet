import BottomPopup from '@/components/atoms/BottomPopup';
import Button from '@/components/atoms/Button';
import ClickBox from '@/components/atoms/ClickBox';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import Modal from '@/components/atoms/Modal';
import ScrollArea from '@/components/atoms/ScrollArea';
import Switch from '@/components/atoms/Switch';
import ClickSelectBox from '@/components/molecule/ClickSelectBox';
import GridContentArea from '@/components/molecule/GridContentArea';
import PriceInput from '@/components/molecule/PriceInput';
import { Calendar } from '@/components/shadcn/Calendar';
import { Categories, PaymentMethods } from '@/constants/util';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

interface AddTranModalProps {
  onCloseModal: () => void;
}

const validationSchema = yup.object().shape({
  price: yup.string().required('금액을 입력해주세요.'),
  type: yup.string().required('수입/지출/이체를 선택해주세요.'),
  category: yup.string(),
  subCategory: yup.string(),
  account: yup.string(),
  paymentMethod: yup.string(),
  date: yup.date().required('날짜를 선택해주세요.'),
  memo: yup.string(),
  isBudget: yup.boolean(),
});

const AddTranModal = ({ onCloseModal }: AddTranModalProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({
    defaultValues: {
      price: '',
      type: '',
      category: '',
      subCategory: '',
      account: '',
      paymentMethod: '',
      date: new Date(),
      memo: '',
      isBudget: false,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const [bottomPopupType, setBottomPopupType] = useState('');

  const togglePopup = (popup: string) => {
    setBottomPopupType(popup);
  };

  const onSubmit = () => {};

  return (
    <Modal
      size="addTran"
      onCloseModal={onCloseModal}
    >
      <header className="text-xl font-GangwonEduPower">내역추가</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-2">
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <PriceInput
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name={'분류'}
              >
                <div className="flex gap-x-2">
                  <Button
                    size="small"
                    variant="ghost"
                    text="지출"
                  />
                  <Button
                    size="small"
                    variant="ghost"
                    text="수입"
                  />
                  <Button
                    size="small"
                    variant="ghost"
                    text="이체"
                  />
                </div>
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name={'카테고리'}
              >
                <ClickBox
                  placeholder="미분류"
                  callbackFunc={() => togglePopup('category')}
                />
                {bottomPopupType === 'category' && (
                  <BottomPopup
                    closePopup={() => togglePopup('')}
                    className="p-8"
                  >
                    <GridContentArea
                      title="Category"
                      size="small"
                      values={Categories}
                      onClick={(key) => {
                        field.onChange(key);
                        togglePopup('');
                      }}
                    />
                  </BottomPopup>
                )}
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="account"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name="거래처"
              >
                <ClickBox
                  placeholder="입력하세요"
                  callbackFunc={() => togglePopup('account')}
                />
                {bottomPopupType === 'account' && (
                  <BottomPopup
                    closePopup={() => togglePopup('')}
                    className="p-8"
                  >
                    <Input
                      type="text"
                      name={field.name}
                      value={field.value}
                      placeholder="거래처를 입력하세요."
                      onChange={field.onChange}
                    />
                  </BottomPopup>
                )}
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name="결제 수단"
              >
                <ClickBox
                  placeholder="선택하세요"
                  callbackFunc={() => togglePopup('paymentMethod')}
                />
                {bottomPopupType === 'paymentMethod' && (
                  <BottomPopup closePopup={() => togglePopup('')}>
                    <ScrollArea
                      title="결제수단"
                      values={PaymentMethods}
                      onClick={(key) => {
                        field.onChange(key);
                        togglePopup('');
                      }}
                    />
                  </BottomPopup>
                )}
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name="날짜"
              >
                <ClickBox
                  placeholder={new Date().toDateString()}
                  callbackFunc={() => togglePopup('date')}
                />
                {bottomPopupType === 'date' && (
                  <BottomPopup
                    closePopup={() => togglePopup('')}
                    className="p-8"
                  >
                    <Calendar
                      color="text-black"
                      onDayClick={(day) => {
                        field.onChange(day);
                        togglePopup('');
                      }}
                    />
                  </BottomPopup>
                )}
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="memo"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name="메모"
              >
                <ClickBox
                  placeholder="입력하세요"
                  callbackFunc={() => togglePopup('memo')}
                />
                {bottomPopupType === 'memo' && (
                  <BottomPopup
                    closePopup={() => togglePopup('')}
                    className="p-8"
                  >
                    <Input
                      type="text"
                      name={field.name}
                      value={field.value}
                      placeholder="메모를 입력하세요."
                      onChange={field.onChange}
                    />
                  </BottomPopup>
                )}
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="isBudget"
            render={({ field }) => (
              <div className="flex items-center justify-between">
                <Label
                  id={field.name}
                  name="예산에서 제외"
                  color="text-gray"
                />
                <Switch
                  id={field.name}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </div>
            )}
          />
        </div>
        <Button
          size="large"
          variant="primary"
          text="저장하기"
          width="w-full"
          className="mt-8"
        />
      </form>
    </Modal>
  );
};

export default AddTranModal;
