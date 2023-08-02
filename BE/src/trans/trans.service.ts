import { Inject } from '@nestjs/common';
import { transActionTypeRequest } from './interface/transaction';
import { ITransRepository } from './trans.repository';
import { IUserRepository } from '@/user/user.repository';
import { ICategoryRepository } from '@/category/category.repository';
import { ISubCategoryRepository } from '@/subCategory/subCategory.repository';

export class TransService {
  constructor(
    @Inject('ITransRepository')
    private readonly transRepository: ITransRepository,
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('ICategoryRepository')
    private readonly categoryRepository: ICategoryRepository,
    @Inject('ISubCategoryRepository')
    private readonly subCategoryRepository: ISubCategoryRepository,
  ) {}

  async postTrans(requestTransAction: transActionTypeRequest, userId: number) {
    const user = await this.userRepository.findOne(userId);
    const category = await this.categoryRepository.findOne(
      requestTransAction.categoryId,
    );
    const subCategory = await this.subCategoryRepository.findOne(
      requestTransAction.subCategoryId,
    );

    return this.transRepository.postTrans(
      requestTransAction,
      user,
      category,
      subCategory,
    );
  }
}
