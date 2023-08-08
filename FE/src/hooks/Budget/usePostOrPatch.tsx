import { setBudget } from '@/apis/budget';
import { BUDGET_POST_SUCCESS, BUDGET_PATCH_SUCCESS } from '@/constants/status';
import { useMutation } from '@tanstack/react-query';

const usePostOrPatch = () => {
  const fetchPostOrPatchBudget = useMutation(setBudget, {
    onSuccess: ({ status }) => {
      if (status === BUDGET_PATCH_SUCCESS) {
      }
    },
  });

  return { fetchPostOrPatchBudget };
};

export default usePostOrPatch;
