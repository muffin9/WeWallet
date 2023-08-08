import Button from '@/components/atoms/Button';
import PriceInput from '@/components/molecule/PriceInput';
import usePostOrPatch from '@/hooks/Budget/usePostOrPatch';
import { Controller, useForm } from 'react-hook-form';

interface SettingBudgetProps {
  month: number;
  onCloseModal: () => void;
}

const SettingBudget = ({ month, onCloseModal }: SettingBudgetProps) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: { budgetPrice: '' },
  });

  const { fetchPostOrPatchBudget } = usePostOrPatch();

  const onSubmit = ({ budgetPrice }: { budgetPrice: string }) => {
    const data = { month, budgetPrice: +budgetPrice };
    fetchPostOrPatchBudget.mutate(data);

    onCloseModal();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="text-xs">{month}월 예산</span>
        <Controller
          control={control}
          name="budgetPrice"
          render={({ field }) => (
            <PriceInput
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <div className="mt-4">
          <div className="flex justify-between">
            <span>최근 3개월 평균 지출</span>
            <span>{}원</span>
          </div>
          <div className="flex justify-between">
            <span>지난 달 지출</span>
            <span>{}원</span>
          </div>
        </div>
        <div className="mt-6">
          <Button
            size="medium"
            variant={!isDirty || !isValid ? 'default' : 'primary'}
            disabled={!isDirty || !isValid}
            text="설정"
            width="w-full"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default SettingBudget;
