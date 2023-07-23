import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserModel } from './domain/user.model';
import { User } from '@/entities/user.entity';
import { signupUserTypeRequest } from './interface/signup';
import { USER_STATUS } from './interface/status';

export interface IUserRepository {
  getUserByUserEmail(email: string): Promise<UserModel>;
  findAll: () => Promise<User[]>;
  createUser: (user: signupUserTypeRequest) => Promise<string>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async findAll() {
    const users = await this.dataSource
      .createQueryBuilder(User, 'user')
      .getMany();
    return users;
  }

  async getUserByUserEmail(email: string) {
    const user = await this.dataSource
      .createQueryBuilder(User, 'user')
      .where('user.email = :email', { email })
      .getOne();
    if (!user) return null;
    return user.toModel();
  }

  async createUser(user: signupUserTypeRequest) {
    const newUser = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ ...user, createdAt: new Date(), provider: 1 })
      .execute();

    if (newUser) return USER_STATUS.USER_CREATED;
  }
}
