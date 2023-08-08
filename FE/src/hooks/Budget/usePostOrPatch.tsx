import { setBudget } from '@/apis/budget';
import { BUDGET_PATCH_SUCCESS } from '@/constants/status';
import { useMutation } from '@tanstack/react-query';
import useBudget from './useBudget';

const usePostOrPatch = () => {
  const { refetchBugetInfo } = useBudget();
  const fetchPostOrPatchBudget = useMutation(setBudget, {
    onSuccess: ({ status }) => {
      if (status === BUDGET_PATCH_SUCCESS) {
        refetchBugetInfo();
      }
    },
  });

  return { fetchPostOrPatchBudget };
};

export default usePostOrPatch;
