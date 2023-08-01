import { Inject } from '@nestjs/common';
import { ICategoryRepository } from './category.repository';
import { CombinedDataParams } from './interface/category';

export class CategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
  ) {}

  private combineData(categories, subCategories) {
    const combinedData: CombinedDataParams[] = [];

    for (const category of categories) {
      const combinedCategory: CombinedDataParams = {
        category: {
          category_id: category.category_id,
          category_name: category.category_name,
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

  async getAllCategory(): Promise<CombinedDataParams[]> {
    const categories = await this.categoryRepository.getCategory();
    const subCategories = await this.categoryRepository.getSubCategory();
    return this.combineData(categories, subCategories);
  }
}
