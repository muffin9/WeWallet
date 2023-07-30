import {
  alcoholImagePath,
  beautyImagePath,
  cafeImagePath,
  carImagePath,
  cultureImagePath,
  dwellingImagePath,
  fashionImagePath,
  financeImagePath,
  foodImagePath,
  healthImagePath,
  lifeImagePath,
  onlineShoppingImagePath,
  trafficImagePath,
  travelImagePath,
} from './url';

export const SampleImageUrl =
  'https://i.namu.wiki/i/fhAwG44l_CoHhU1RJzn-gaonLHYVCChkgbqm2MG7V3F5U4B9jGpGPbLDM2vTtVRe8sRv9D-I8I5_V3GI5wPi6qOxJ4XhNXSeI7L-26tEHfZko1hxf17RLtkNWbZ39CF2eF_XcvWx3M0myx4BbZ6abA.webp';

export const PaymentMethods = {
  cash: '현금',
  checkCard: '체크카드',
  creditCard: '신용카드',
  kakaoPay: '카카오페이',
};

export const Categories = {
  food: { name: '식비', imagePath: foodImagePath },
  cafe: { name: '카페', imagePath: cafeImagePath },
  alcohol: { name: '술/유흥', imagePath: alcoholImagePath },
  life: { name: '생활', imagePath: lifeImagePath },
  onlineShopping: { name: '온라인쇼핑', imagePath: onlineShoppingImagePath },
  fashion: { name: '패션', imagePath: fashionImagePath },
  beauty: { name: '뷰티', imagePath: beautyImagePath },
  traffic: { name: '교통', imagePath: trafficImagePath },
  car: { name: '자동차', imagePath: carImagePath },
  dwelling: { name: '주거', imagePath: dwellingImagePath },
  health: { name: '건강', imagePath: healthImagePath },
  finance: { name: '금융', imagePath: financeImagePath },
  culture: { name: '문화', imagePath: cultureImagePath },
  travel: { name: '여행', imagePath: travelImagePath },
};

export const TransType = {
  income: '수입',
  expenditure: '지출',
  transfer: '이체',
};
