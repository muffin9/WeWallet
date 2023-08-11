import { getAllCategory } from '@/apis/category';
import { useQuery } from '@tanstack/react-query';

const useCategory = () => {
  const { data } = useQuery(['getAllCategory'], getAllCategory);

  return { allCategoriesData: data?.allCategories };
};

export default useCategory;
