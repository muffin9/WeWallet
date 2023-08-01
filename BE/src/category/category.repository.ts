import { Category } from '@/entities/category.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';

export interface ICategoryRepository {
  getCategory: () => Promise<Category[]>;
  getSubCategory: () => Promise<SubCategory[]>;
}

export class CategoryRepository implements ICategoryRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async getCategory() {
    return await this.dataSource
      .createQueryBuilder(Category, 'category')
      .getRawMany();
  }

  async getSubCategory() {
    return await this.dataSource
      .createQueryBuilder(SubCategory, 'subCategory')
      .getRawMany();
  }
}
