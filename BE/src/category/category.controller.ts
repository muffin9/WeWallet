import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CombinedDataParams } from './interface/category';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/all')
  async getAllCategory(): Promise<{
    status: string;
    allCategories: CombinedDataParams[];
  }> {
    return await this.categoryService.getAllCategory();
  }
}
