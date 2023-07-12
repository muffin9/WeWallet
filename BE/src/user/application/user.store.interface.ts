import { UserModel } from '@/user/domain/user.model';

export interface IUserStore {
  create(user: UserModel): Promise<number>;
}
