import { PaymentIdType } from '@/types/payment';

export const SampleImageUrl =
  'https://i.namu.wiki/i/fhAwG44l_CoHhU1RJzn-gaonLHYVCChkgbqm2MG7V3F5U4B9jGpGPbLDM2vTtVRe8sRv9D-I8I5_V3GI5wPi6qOxJ4XhNXSeI7L-26tEHfZko1hxf17RLtkNWbZ39CF2eF_XcvWx3M0myx4BbZ6abA.webp';

export const PaymentArr = [
  'CASH',
  'CREDIT_CARD',
  'CHECK_CARD',
  'KAKAO_PAY',
  'TOSS',
  'PAYCO',
  'POINT',
  'ETC',
];

export const TransTypeArr = ['INCOME', 'EXPENDITURE', 'TRANSFER'];

export const PaymentMethods = [
  { id: 'CASH', name: '현금' },
  { id: 'CREDIT_CARD', name: '신용카드' },
  { id: 'CHECK_CARD', name: '체크카드' },
  { id: 'KAKAO_PAY', name: '카카오페이' },
  { id: 'TOSS', name: '토스' },
  { id: 'PAYCO', name: '페이코' },
  { id: 'POINT', name: '포인트' },
  { id: 'ETC', name: '기타' },
] as { id: PaymentIdType; name: string }[];

export const TransType = {
  INCOME: '수입',
  EXPENDITURE: '지출',
  TRANSFER: '이체',
};
