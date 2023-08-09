export enum TransactionType {
  INCOME = 'INCOME',
  EXPENDITURE = 'EXPENDITURE',
  TRANSFER = 'TRANSFER',
}

export type TransActionDetailDataType = {
  status: string;
  day: number;
  detailInfos: TransDetailInfoType[];
  totalPrice: number;
};

export type TransDetailInfoType = {
  account: string;
  category: { id: number; name: string; image_url: string };
  createdAt: string;
  date: string;
  id: number;
  is_budget: boolean;
  is_fixed: boolean;
  memo: string;
  payment_method: string;
  price: number;
  type: TransactionType;
  updatedAt: string;
};
