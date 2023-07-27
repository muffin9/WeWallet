import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserModel } from './domain/user.model';
import { User } from '@/entities/user.entity';
import { signupUserTypeRequest } from './interface/signup';
import { USER_STATUS } from './interface/status';
import { loginUserTypeRequest } from './interface/login';
import { transformPassword, validatePassword } from './user.util';

export interface IUserRepository {
  getUserByUserEmail(email: string): Promise<UserModel>;
  findAll: () => Promise<User[]>;
  createUser: (user: signupUserTypeRequest) => Promise<string>;
  login: (user: loginUserTypeRequest) => Promise<string>;
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
    const convertedPassword = await transformPassword(user.password);

    const newUser = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        ...user,
        password: convertedPassword,
        createdAt: new Date(),
        provider: 1,
      })
      .execute();

    if (newUser) return USER_STATUS.USER_CREATED;
  }

  async login(user: loginUserTypeRequest) {
    const { email, password } = user;

    const findUser = await this.dataSource
      .createQueryBuilder(User, 'user')
      .where('user.email = :email', { email })
      .getOne();

    if (!findUser) return USER_STATUS.USER_NONE_EMAIL;

    if (!(await validatePassword(password, findUser.password)))
      return USER_STATUS.USER_MISMATCH_PASSWORD;

    return USER_STATUS.USER_LOGIN_SUCCESS;
  }
}
