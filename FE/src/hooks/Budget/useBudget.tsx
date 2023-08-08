import { getBudgetInfo } from '@/apis/budget';
import { BUDGET_GET_SUCCESS } from '@/constants/status';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useBudget = (month: number) => {
  const [budgetData, setBudgetData] = useState<{
    totalPrice: number;
    remainBudgetPrice: number;
    dailyBudgetPrice: number;
    recommendedSpendingPrice: number;
  }>();

  const { isLoading } = useQuery(
    ['getBudgetInfo'],
    () => getBudgetInfo(month),
    {
      onSuccess: ({ budgetInfo, status }) => {
        if (status === BUDGET_GET_SUCCESS) {
          setBudgetData(budgetInfo);
        }
      },
    },
  );

  return {
    budgetLoading: isLoading,
    totalPrice: budgetData?.totalPrice,
    remainBudgetPrice: budgetData?.remainBudgetPrice,
    dailyBudgetPrice: budgetData?.dailyBudgetPrice,
    recommendedSpendingPrice: budgetData?.recommendedSpendingPrice,
  };
};

export default useBudget;
