export const TRANS_STATUS = {
  TRANSACTION_GET_SUCCESS: 'T-G-200',
  TRANSACTION_POST_SUCCESS: 'T-P-200',
  TRANSACTION_GET_DETAIL_SUCCESS: 'T-G-D-200',
  TRANSACTION_PATCH_SUCCESS: 'T-PT-200',
  TRANSACTION_DELETE_SUCCESS: 'T-D-200',
} as const;

export const USER_STATUS = {
  USER_CREATED: 'U-C-200',
  USER_NONE_EMAIL: 'U-N-400',
  USER_MISMATCH_PASSWORD: 'U-M-400',
  USER_LOGIN_SUCCESS: 'U-L-200',
} as const;

export const CATEGORY_STATUS = {
  CATEGORY_ALL_GET_SUCCESS: 'C-A-200',
};

export const BUDGET_STATUS = {
  BUDGET_GET_SUCCESS: 'B-G-200',
  BUDGET_POST_SUCCESS: 'B-P-200',
  BUDGET_PATCH_SUCCESS: 'B-PT-200',
};
