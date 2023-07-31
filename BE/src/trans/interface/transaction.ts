export type transActionTypeRequest = {
  price: string;
  type: string;
  category: string | undefined;
  subCategory: string | undefined;
  account: string | undefined;
  paymentMethod: string | undefined;
  date: Date;
  memo: string | undefined;
  isBudget: boolean;
};

export type transActionTypeResponse = {
  status: string;
};
