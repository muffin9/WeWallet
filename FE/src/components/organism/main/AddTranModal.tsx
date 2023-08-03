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
import { PaymentArr, PaymentMethods, TransType } from '@/constants/util';
import useCategory from '@/hooks/Category/useCategory';
import useTransAction from '@/hooks/TransAction/useTransAction';
import { SubCategoryType } from '@/types/category';
import { setObjectKeys } from '@/utils/util';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

interface AddTranModalProps {
  onCloseModal: () => void;
}

export type TypeTransactions = {
  price: string;
  type: string;
  categoryId: number;
  subCategoryId: number;
  account: string | undefined;
  paymentMethod: string | undefined;
  date: Date;
  memo: string | undefined;
  isBudget: boolean;
};

const validationSchema = yup.object().shape({
  price: yup.string().required('금액을 입력해주세요.'),
  type: yup.string().required('수입/지출/이체를 선택해주세요.'),
  categoryId: yup.number().required(),
  subCategoryId: yup.number().required(),
  account: yup.string(),
  paymentMethod: yup
    .string()
    .oneOf(Object.values(PaymentArr), '유효한 결제 방식을 선택해주세요.'),
  date: yup.date().required('날짜를 선택해주세요.'),
  memo: yup.string(),
  isBudget: yup.boolean().required('예산여부를 선택해주세요.'),
});

const AddTranModal = ({ onCloseModal }: AddTranModalProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      price: '',
      type: 'INCOME',
      categoryId: 0,
      subCategoryId: 0,
      account: '',
      paymentMethod: '',
      date: new Date(),
      memo: '',
      isBudget: false,
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { fetchPostTransAction } = useTransAction();
  const { allCategoriesData } = useCategory();

  const [bottomPopupType, setBottomPopupType] = useState('');

  const togglePopup = (popup: string) => {
    setBottomPopupType(popup);
  };

  const onSubmit = (data: TypeTransactions) => {
    fetchPostTransAction.mutate(data);
    onCloseModal();
  };

  const calculatedValue = (categoryId: number) => {
    const categoryName =
      allCategoriesData[categoryId - 1].category.category_name;

    const subCategory = allCategoriesData[categoryId - 1]?.category.subCategory;

    const subCategoryName = subCategory.find(
      (sub: SubCategoryType) => sub.subCategory_id === watch('subCategoryId'),
    )?.subCategory_name;

    return `${categoryName}-${subCategoryName || '미분류'}`;
  };

  return (
    <Modal
      size="addTran"
      onCloseModal={onCloseModal}
    >
      <header className="text-xl font-GangwonEduPower mb-8">내역추가</header>
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
                  {Object.entries(TransType).map(([key, value]) => {
                    return (
                      <Button
                        size="small"
                        variant="ghost"
                        text={value}
                        onClick={() => field.onChange(key)}
                        className={`${
                          field.value === key && 'border-success text-success'
                        }`}
                      />
                    );
                  })}
                </div>
              </ClickSelectBox>
            )}
          />
          <Controller
            control={control}
            name="categoryId"
            render={({ field }) => (
              <ClickSelectBox
                id={field.name}
                name={'카테고리'}
              >
                <ClickBox
                  placeholder={`${
                    field.value === 0 ? '미분류' : calculatedValue(field.value)
                  }`}
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
                      values={allCategoriesData}
                      onClick={(clickId: number) => {
                        field.onChange(clickId);
                        togglePopup('subCategory');
                      }}
                    />
                  </BottomPopup>
                )}
              </ClickSelectBox>
            )}
          />

          <Controller
            control={control}
            name="subCategoryId"
            render={({ field }) => {
              return bottomPopupType === 'subCategory' ? (
                <BottomPopup closePopup={() => togglePopup('')}>
                  <ScrollArea
                    title="서브 카테고리"
                    values={setObjectKeys(
                      allCategoriesData[watch('categoryId') - 1].category
                        .subCategory,
                      ['id', 'name'],
                    )}
                    onClick={(key) => {
                      field.onChange(key);
                      togglePopup('');
                    }}
                  />
                </BottomPopup>
              ) : (
                <div></div>
              );
            }}
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
                  placeholder={field.value || '입력하세요'}
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
                  placeholder={
                    PaymentMethods.find((payment) => payment.id === field.value)
                      ?.name || '선택하세요'
                  }
                  callbackFunc={() => togglePopup('paymentMethod')}
                />
                {bottomPopupType === 'paymentMethod' && (
                  <BottomPopup closePopup={() => togglePopup('')}>
                    <ScrollArea
                      title="결제수단"
                      values={setObjectKeys(PaymentMethods, ['id', 'name'])}
                      onClick={(clickId) => {
                        field.onChange(clickId);
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
                  placeholder={field.value.toDateString()}
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
                  placeholder={field.value || '입력하세요'}
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
          variant={!isDirty || !isValid ? 'default' : 'primary'}
          disabled={!isDirty || !isValid}
          text="저장하기"
          width="w-full"
          className="mt-8"
          type="submit"
        />
      </form>
    </Modal>
  );
};

export default AddTranModal;
