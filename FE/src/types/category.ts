export type SubCategoryType = {
  subCategoryId: number;
  subCategoryName: string;
};

export type CategoryType = {
  categoryId: number;
  categoryName: string;
  categoryImageUrl: string;
  subCategory: SubCategoryType[];
};
