import { SubCategory } from '@/entities/subCategory.entity';
import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';

export interface ISubCategoryRepository {
  findOne: (userId: number) => Promise<SubCategory>;
  getSubCategory: () => Promise<SubCategory[]>;
}

export class SubCategoryRepository implements ISubCategoryRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async findOne(subCategoryId: number) {
    return await this.dataSource
      .createQueryBuilder(SubCategory, 'category')
      .where('category.id = :subCategoryId', { subCategoryId })
      .getOne();
  }

  async getSubCategory() {
    return await this.dataSource
      .createQueryBuilder(SubCategory, 'subCategory')
      .getRawMany();
  }
}
