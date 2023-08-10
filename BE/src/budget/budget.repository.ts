import { Budget } from '@/entities/budget.entity';
import { User } from '@/entities/user.entity';
import { Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { budgetTypeRequest } from './interface/budget';

export interface IBudgetRepository {
  getBudget: (month: number, userId: number) => Promise<Budget>;
  postBudget: (requestBudget: budgetTypeRequest, user: User) => Promise<void>;
  patchBudget: (
    requestBudget: budgetTypeRequest,
    userId: number,
  ) => Promise<void>;
}

export class BudgetRepository implements IBudgetRepository {
  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {}

  async getBudget(month: number, userId: number) {
    return this.dataSource
      .createQueryBuilder(Budget, 'budget')
      .where('budget.user_id = :userId', { userId })
      .andWhere('budget.month = :month', { month })
      .getOne();
  }

  async postBudget(requestBudget: budgetTypeRequest, user: User) {
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Budget)
      .values({
        totalPrice: requestBudget.budgetPrice,
        month: requestBudget.month,
        user,
      })
      .execute();
  }

  async patchBudget(requestBudget: budgetTypeRequest, userId: number) {
    await this.dataSource
      .createQueryBuilder()
      .update(Budget)
      .set({
        totalPrice: requestBudget.budgetPrice,
        month: requestBudget.month,
      })
      .where('budget.user_id = :userId', { userId })
      .execute();
  }
}
