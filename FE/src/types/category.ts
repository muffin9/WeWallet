export type SubCategoryType = {
  subCategory_id: number;
  subCategory_name: string;
};

export type CategoryType = {
  category_id: number;
  category_name: string;
  category_image_url: string;
  subCategory: SubCategoryType[];
};
