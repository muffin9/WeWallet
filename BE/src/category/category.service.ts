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
          category_id: category.category_id,
          category_name: category.category_name,
          category_image_url: category.category_image_url,
          subCategory: [],
        },
      };

      for (const subCategory of subCategories) {
        if (subCategory.subCategory_category_id === category.category_id) {
          combinedCategory.category.subCategory.push({
            subCategory_id: subCategory.subCategory_id,
            subCategory_name: subCategory.subCategory_name,
          });
        }
      }

      combinedData.push(combinedCategory);
    }

    return combinedData;
  }

  async getAllCategory(): Promise<{
    status: string;
    data: CombinedDataParams[];
  }> {
    const categories = await this.categoryRepository.getCategory();
    const subCategories = await this.subCategoryRepository.getSubCategory();

    return {
      status: CATEGORY_STATUS.CATEGORY_ALL_GET_SUCCESS,
      data: this.combineData(categories, subCategories),
    };
  }
}
