export interface CombinedDataParams {
  category: {
    category_id: number;
    category_name: string;
    category_image_url: string;
    subCategory: {
      subCategory_id: number;
      subCategory_name: string;
    }[];
  };
}
