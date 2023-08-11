export enum TransactionType {
  INCOME = 'INCOME',
  EXPENDITURE = 'EXPENDITURE',
  TRANSFER = 'TRANSFER',
}

export type TransActionDetailDataType = {
  status: string;
  month: number;
  day: number;
  detailInfos: TransDetailInfoType[];
  totalPrice: number;
};

export type TransDetailInfoType = {
  account: string;
  category: { id: number; name: string; imageUrl: string };
  createdAt: string;
  date: string;
  id: number;
  isBudget: boolean;
  isFixed: boolean;
  memo: string;
  paymentMethod: string;
  price: number;
  type: TransactionType;
  updatedAt: string;
};
