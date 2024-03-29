import { Transaction, TransactionType } from '@/entities/transaction.entity';

export type transActionPostTypeRequest = {
  price: string;
  type: TransactionType;
  categoryId: number | null;
  subCategoryId: number | null;
  account: string | undefined;
  paymentMethod: string | undefined;
  date: Date;
  memo: string | undefined;
  isBudget: boolean;
};

export type transActionPatchTypeRequest = transActionPostTypeRequest & {
  id: number;
};

export type transActionGetTransResponse = {
  status: string;
  all: { [key: string]: number };
  date: { [key: string]: { [key: string]: number } };
};

export type transActionPostTypeResponse = {
  status: string;
};

export type transActionPatchTypeResponse = {
  status: string;
};

export type transActionDetailTypeResponse = {
  status: string;
  month: number;
  day: number;
  totalPrice: number;
  detailInfos: Omit<Transaction, 'user' | 'subCategory'>[];
};
