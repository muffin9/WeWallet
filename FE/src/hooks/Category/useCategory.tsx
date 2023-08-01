import { getAllCategory } from '@/apis/category';
import { CATEGORY_ALL_GET_SUCCESS } from '@/constants/status';
import { useQuery } from '@tanstack/react-query';

const useCategory = () => {
  const { data } = useQuery(['getAllCategory'], getAllCategory, {
    onSuccess: ({ data, status }) => {
      if (status === CATEGORY_ALL_GET_SUCCESS) {
        return data;
      }
    },
  });

  return { allCategoriesData: data?.data };
};

export default useCategory;
