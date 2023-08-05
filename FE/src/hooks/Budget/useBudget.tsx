import { getBudgetInfo } from '@/apis/budget';
import { BUDGET_GET_SUCCESS } from '@/constants/status';
import { useQuery } from '@tanstack/react-query';

const useBudget = () => {
  const { data, isLoading } = useQuery(['getBudget'], getBudgetInfo, {
    onSuccess: ({ data, status }) => {
      if (status === BUDGET_GET_SUCCESS) {
        return data;
      }
    },
  });

  return {
    budgetLoading: isLoading,
    budgetPrice: data?.budgetPrice,
    remainBudgetPrice: data?.remainBudgetPrice,
    dailyBudgetPrice: data?.dailyBudgetPrice,
    RecommendedSpendingPrice: data?.RecommendedSpendingPrice,
  };
};

export default useBudget;
