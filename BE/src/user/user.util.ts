import * as bcrypt from 'bcrypt';

export const transformPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const validatePassword = async (
  password: string,
  hashPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
