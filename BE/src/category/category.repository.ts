import { Category } from '@/entities/category.entity';
import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';

export interface ICategoryRepository {
  getCategory: () => Promise<Category[]>;
  findOne: (userId: number) => Promise<Category>;
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

  async findOne(categoryId: number) {
    return await this.dataSource
      .createQueryBuilder(Category, 'category')
      .where('category.id = :categoryId', { categoryId })
      .getOne();
  }
}
