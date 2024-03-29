import { Inject } from '@nestjs/common';
import {
  transActionPatchTypeRequest,
  transActionPostTypeRequest,
} from './interface/transaction';
import { ITransRepository } from './trans.repository';
import { IUserRepository } from '@/user/user.repository';
import { ICategoryRepository } from '@/category/category.repository';
import { ISubCategoryRepository } from '@/subCategory/subCategory.repository';
import { TRANS_STATUS } from '@/utils/status';

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

  calculateTotalByType(transactionData) {
    return transactionData.reduce(
      (acc, cur) => {
        switch (cur.type) {
          case 'INCOME':
            acc.INCOME += cur.price;
            break;
          case 'EXPENDITURE':
            acc.EXPENDITURE += cur.price;
            break;
          case 'TRANSFER':
            acc.TRANSFER += cur.price;
          default:
            break;
        }
        return acc;
      },
      {
        INCOME: 0,
        EXPENDITURE: 0,
      },
    );
  }

  calculateDailyTotalsByType(transactionData) {
    return transactionData.reduce((acc, cur) => {
      const day = new Date(cur.date).getDate();

      if (!acc[day]) {
        acc[day] = { INCOME: 0, EXPENDITURE: 0 };
      }

      if (cur.type === 'INCOME') {
        acc[day].INCOME += cur.price;
      } else if (cur.type === 'EXPENDITURE') {
        acc[day].EXPENDITURE += cur.price;
      }

      return acc;
    }, {} as Record<number, { INCOME: number; EXPENDITURE: number }>);
  }

  async getTrans(month: number, userId: number) {
    const user = await this.userRepository.findOne(userId);
    const transactionData = await this.transRepository.getTrans(month, user);
    const { INCOME, EXPENDITURE } = this.calculateTotalByType(transactionData);
    const DatabyDay = this.calculateDailyTotalsByType(transactionData);

    return {
      status: TRANS_STATUS.TRANSACTION_GET_SUCCESS,
      all: { INCOME, EXPENDITURE },
      date: DatabyDay,
    };
  }

  async getTransDetail(month: number, day: number, userId: number) {
    const user = await this.userRepository.findOne(userId);
    const transactionDetailData = await this.transRepository.getTransDetail(
      month,
      day,
      user,
    );

    return {
      status: TRANS_STATUS.TRANSACTION_GET_DETAIL_SUCCESS,
      month,
      day: +day,
      totalPrice: transactionDetailData.reduce(
        (acc, cur) => acc + cur.price,
        0,
      ),
      detailInfos: transactionDetailData,
    };
  }

  async postTrans(
    requestTransAction: transActionPostTypeRequest,
    userId: number,
  ) {
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

  async patchTrans(
    requestTransAction: transActionPatchTypeRequest,
    userId: number,
  ) {
    const user = await this.userRepository.findOne(userId);
    const category = await this.categoryRepository.findOne(
      requestTransAction.categoryId,
    );
    const subCategory = await this.subCategoryRepository.findOne(
      requestTransAction.subCategoryId,
    );

    return this.transRepository.patchTrans(
      requestTransAction,
      user,
      category,
      subCategory,
    );
  }

  async deleteTrans(transId: number, userId: number) {
    const user = await this.userRepository.findOne(userId);
    return this.transRepository.deleteTrans(transId, user);
  }
}
