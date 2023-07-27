export type signupUserTypeRequest = {
  email: string;
  nickname: string;
  name: string;
  password: string;
};

export type signupUserTypeResponse = {
  status: string;
  user: {
    userId: number;
    email: string;
    nickname: string;
  };
};
