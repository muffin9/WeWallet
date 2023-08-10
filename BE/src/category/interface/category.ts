export interface CombinedDataParams {
  category: {
    categoryId: number;
    categoryName: string;
    categoryImageUrl: string;
    subCategory: {
      subCategoryId: number;
      subCategoryName: string;
    }[];
  };
}
