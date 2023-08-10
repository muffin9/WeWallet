import { Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';
import { CombinedDataParams } from './interface/category';
import { ISubCategoryRepository } from '@/subCategory/subCategory.repository';
import { CATEGORY_STATUS } from '@/utils/status';

export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
    @Inject('ISubCategoryRepository')
    private readonly subCategoryRepository: ISubCategoryRepository,
  ) {}

  private combineData(categories, subCategories) {
    const combinedData: CombinedDataParams[] = [];

    for (const category of categories) {
      const combinedCategory: CombinedDataParams = {
        category: {
          categoryId: category.category_id,
          categoryName: category.category_name,
          categoryImageUrl: category.category_image_url,
          subCategory: [],
        },
      };

      for (const subCategory of subCategories) {
        if (subCategory.subCategory_category_id === category.category_id) {
          combinedCategory.category.subCategory.push({
            subCategoryId: subCategory.subCategory_id,
            subCategoryName: subCategory.subCategory_name,
          });
        }
      }

      combinedData.push(combinedCategory);
    }

    return combinedData;
  }

  async getAllCategory(): Promise<{
    status: string;
    allCategories: CombinedDataParams[];
  }> {
    const categories = await this.categoryRepository.getCategory();
    const subCategories = await this.subCategoryRepository.getSubCategory();

    return {
      status: CATEGORY_STATUS.CATEGORY_ALL_GET_SUCCESS,
      allCategories: this.combineData(categories, subCategories),
    };
  }
}
