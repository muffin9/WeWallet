import { Inject, Injectable } from '@nestjs/common';
import {
  transActionTypeRequest,
  transActionTypeResponse,
} from './interface/transaction';
import { DataSource } from 'typeorm';
import { Transaction } from '@/entities/transaction.entity';
import { User } from '@/entities/user.entity';
import { Category } from '@/entities/category.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import { TRANS_STATUS } from '@/utils/status';

export interface ITransRepository {
  postTrans: (
    transActionTypeRequest: transActionTypeRequest,
    user: User,
    category: Category,
    subCategory: SubCategory,
  ) => Promise<transActionTypeResponse>;
}

@Injectable()
export class TransRepository implements ITransRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async postTrans(
    data: transActionTypeRequest,
    user: User,
    category: Category,
    subCategory: SubCategory,
  ) {
    console.log(data);
    const newTransAction = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Transaction)
      .values({
        price: +data.price,
        type: data.type,
        account: data.account,
        payment_method: data.paymentMethod,
        date: data.date,
        memo: data.memo,
        is_budget: data.isBudget,
        is_fixed: false,
        createdAt: new Date(),
        user,
        category,
        subCategory,
      })
      .execute();

    if (newTransAction)
      return { status: TRANS_STATUS.TRANSACTION_POST_SUCCESS };
  }
}
