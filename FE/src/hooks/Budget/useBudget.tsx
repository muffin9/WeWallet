import { getBudgetInfo } from '@/apis/budget';
import { BUDGET_GET_SUCCESS } from '@/constants/status';
import useCalendarStore from '@/store/useCalendarStore';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useBudget = () => {
  const month = useCalendarStore((state) => state.month);

  const [budgetData, setBudgetData] = useState<{
    totalPrice: number;
    remainBudgetPrice: number;
    dailyBudgetPrice: number;
    recommendedSpendingPrice: number;
  }>();

  const { isLoading, refetch: refetchBugetInfo } = useQuery(
    ['getBudgetInfo', month],
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
    refetchBugetInfo,
    totalPrice: budgetData?.totalPrice,
    remainBudgetPrice: budgetData?.remainBudgetPrice,
    dailyBudgetPrice: budgetData?.dailyBudgetPrice,
    recommendedSpendingPrice: budgetData?.recommendedSpendingPrice,
  };
};

export default useBudget;
