export const PROVIDER = {
  LOCAL: 'LOCAL',
  KAKAO: 'KAKAO',
  GOOGLE: 'GOOGLE',
} as const;
type PROVIDER = (typeof PROVIDER)[keyof typeof PROVIDER];
