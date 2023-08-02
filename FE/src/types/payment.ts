export type PaymentIdType =
  | 'CASH'
  | 'CREDIT_CARD'
  | 'CHECK_CARD'
  | 'KAKAO_PAY'
  | 'TOSS'
  | 'PAYCO'
  | 'POINT'
  | 'ETC';

export type PaymentType = {
  id: PaymentIdType;
  name: string;
};
