export const PROVIDER = {
  KAKAO: 'Kakao',
  COMMON: 'Common',
} as const;
type PROVIDER = (typeof PROVIDER)[keyof typeof PROVIDER];
