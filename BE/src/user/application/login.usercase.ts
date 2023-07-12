import { User } from '@/entities/user.entity';

export interface UserUseCase {
  getResult(userId: number): Promise<User>;
}
