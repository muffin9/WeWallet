import { UserModel } from '../domain/user.model';

export interface IUserReader {
  getUserByEmail(email: string): Promise<UserModel>;
}
