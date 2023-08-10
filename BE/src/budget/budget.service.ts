import { Inject } from '@nestjs/common';
import { IBudgetRepository } from './budget.repository';
import { IUserRepository } from '@/user/user.repository';
import { BUDGET_STATUS } from '@/utils/status';
import { getDaysInThisMonth } from '@/utils/date';
import { budgetTypeRequest } from './interface/budget';
import { ITransRepository } from '@/trans/trans.repository';
import { TransactionType } from '@/entities/transaction.entity';

export class BudgetService {
  constructor(
    @Inject('IBudgetRepository')
    private readonly budgetRepository: IBudgetRepository,
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    @Inject('ITransRepository')
    private readonly transRepository: ITransRepository,
  ) {}

  calculatedRecommendedSpendingPrice(totalPrice: number, usePrice: number) {
    if (totalPrice === 0) return 0;

    const remainingBudget = totalPrice - usePrice;
    const todayDay = new Date().getDate();
    const remainingDays = getDaysInThisMonth() - todayDay;

    if (remainingDays === 0) {
      return remainingBudget; // 오늘이 마지막 날인 경우, 남은 예산 전체를 오늘 사용할 수 있습니다.
    }

    return Math.floor(remainingBudget / remainingDays); // 남은 예산을 남은 일수로 나누어 하루 예산을 계산합니다.
  }

  async getBudgetInfo(month: number, userId: number) {
    const user = await this.userRepository.findOne(userId);
    const budgetData = await this.budgetRepository.getBudget(month, user.id);

    // budgetPrice : 예산
    // remainBudgetPrice : 남은 예산
    // dailyBudgetPrice: 하루 예산
    // RecommendedSpendingPrice: 추천 지출
    const totalPrice = budgetData?.totalPrice || 0;
    const incomeTrans = await this.transRepository.getTrans(
      month,
      user,
      TransactionType.EXPENDITURE,
    ); // usePrice는 transAction의 EXPENDITURE

    const usePrice = incomeTrans.reduce((acc, cur) => {
      return (acc += cur.price);
    }, 0);

    return {
      status: BUDGET_STATUS.BUDGET_GET_SUCCESS,
      budgetInfo: {
        totalPrice,
        remainBudgetPrice: totalPrice === 0 ? 0 : totalPrice - usePrice,
        dailyBudgetPrice: Math.floor(totalPrice / getDaysInThisMonth()),
        recommendedSpendingPrice: this.calculatedRecommendedSpendingPrice(
          totalPrice,
          usePrice,
        ),
      },
    };
  }

  async patchBudget(requestBudget: budgetTypeRequest, userId: number) {
    const budget = await this.budgetRepository.getBudget(
      requestBudget.month,
      userId,
    );
    const user = await this.userRepository.findOne(userId);

    budget
      ? await this.budgetRepository.patchBudget(requestBudget, userId)
      : await this.budgetRepository.postBudget(requestBudget, user);

    return {
      status: BUDGET_STATUS.BUDGET_PATCH_SUCCESS,
    };
  }
}
