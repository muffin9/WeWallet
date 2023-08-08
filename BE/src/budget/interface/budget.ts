export type budgetInfoTypeResponse = {
  status: string;
  budgetInfo: {
    totalPrice: number;
    remainBudgetPrice: number;
    dailyBudgetPrice: number;
    recommendedSpendingPrice: number;
  };
};

export type budgetTypeRequest = {
  month: number;
  budgetPrice: number;
};
