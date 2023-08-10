import { Inject, Injectable } from '@nestjs/common';
import {
  transActionPostTypeRequest,
  transActionPostTypeResponse,
} from './interface/transaction';
import { DataSource } from 'typeorm';
import { Transaction, TransactionType } from '@/entities/transaction.entity';
import { User } from '@/entities/user.entity';
import { Category } from '@/entities/category.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import { TRANS_STATUS } from '@/utils/status';

export interface ITransRepository {
  getTrans: (
    month: number,
    user: User,
    type?: TransactionType,
  ) => Promise<Transaction[]>;
  getTransDetail: (
    month: number,
    day: number,
    user: User,
  ) => Promise<Transaction[]>;
  postTrans: (
    transActionPostTypeRequest: transActionPostTypeRequest,
    user: User,
    category: Category,
    subCategory: SubCategory,
  ) => Promise<transActionPostTypeResponse>;
}

@Injectable()
export class TransRepository implements ITransRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}
  async getTrans(month: number, user: User, type?: TransactionType) {
    const query = this.dataSource
      .createQueryBuilder(Transaction, 'transaction')
      .where('MONTH(transaction.date) = :month', { month })
      .andWhere('transaction.user_id = :user_id', { user_id: user.id });

    if (type) {
      query.andWhere('transaction.type = :type', { type });
    }

    return query.getMany();
  }

  async getTransDetail(month: number, day: number, user: User) {
    const query = this.dataSource
      .createQueryBuilder(Transaction, 'transaction')
      .where('MONTH(transaction.date) = :month', { month })
      .andWhere('DAY(transaction.date) = :day', { day })
      .andWhere('transaction.user_id = :user_id', { user_id: user.id })
      .leftJoinAndSelect('transaction.category', 'category');

    return query.getMany();
  }

  async postTrans(
    data: transActionPostTypeRequest,
    user: User,
    category: Category,
    subCategory: SubCategory,
  ) {
    const newTransAction = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Transaction)
      .values({
        price: +data.price,
        type: data.type,
        account: data.account,
        paymentMethod: data.paymentMethod,
        date: data.date,
        memo: data.memo,
        isBudget: data.isBudget,
        isFixed: false,
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
