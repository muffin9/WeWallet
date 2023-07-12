import { UserModel } from '@/user/domain/user.model';

export interface IUserReader {
  getUserByEmail(email: string): Promise<UserModel>;
}
