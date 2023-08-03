import { Module } from '@nestjs/common';
import { MysqlModule } from '../provider/database.module';
import { SubCategoryRepository } from './subCategory.repository';

@Module({
  imports: [MysqlModule],
  controllers: [],
  providers: [
    {
      provide: 'ISubCategoryRepository',
      useClass: SubCategoryRepository,
    },
  ],
})
export class CategoryModule {}
