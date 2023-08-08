interface SettingBudgetProps {
  month: number;
}

const SettingBudget = ({ month }: SettingBudgetProps) => {
  // 3개월 평균 지출, 지난 달 지출 api 필요
  return (
    <section>
      <span className="text-xs">{month}월 예산</span>
    </section>
  );
};

export default SettingBudget;
