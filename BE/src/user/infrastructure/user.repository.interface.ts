import { User } from '@/entities/user.entity';
import { UserModel } from '@/user/domain/user.model';

export interface IUserRepository {
  create(user: UserModel): Promise<number>;
  getUserByUserEmail(email: string): Promise<UserModel>;
  findAll(): Promise<User[]>;
}
