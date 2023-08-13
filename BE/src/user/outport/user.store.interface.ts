import { UserModel } from '../domain/user.model';

export interface IUserStore {
  signupUserBySocial(user: UserModel): Promise<number>;
}
