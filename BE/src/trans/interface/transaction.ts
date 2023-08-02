import { TransactionType } from '@/entities/transaction.entity';

export type transActionTypeRequest = {
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

export type transActionTypeResponse = {
  status: string;
};
