export type loginUserTypeRequest = {
  email: string;
  password: string;
};

export type loginUserTypeResponse = {
  status: string;
  user: {
    userId: number;
    email: string;
    nickname: string;
  } | null;
};
