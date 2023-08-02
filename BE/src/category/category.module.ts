import { Module } from '@nestjs/common';
import { MysqlModule } from '../provider/database.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { SubCategoryRepository } from '@/subCategory/subCategory.repository';

@Module({
  imports: [MysqlModule],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: 'ICategoryRepository',
      useClass: CategoryRepository,
    },
    {
      provide: 'ISubCategoryRepository',
      useClass: SubCategoryRepository,
    },
  ],
})
export class CategoryModule {}
