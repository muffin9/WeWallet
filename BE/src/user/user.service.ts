import { User } from '../entities/user.entity';
import { UserModel } from './domain/user.model';
import { loginUserTypeRequest } from './interface/login';
import { signupUserTypeRequest } from './interface/signup';
import { IUserRepository } from './user.repository';
import { Inject } from '@nestjs/common';

export class UserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOne: (userId: number) => Promise<User>;

  getUserByEmail(email: string): Promise<UserModel> {
    return this.userRepository.getUserByEmail(email);
  }

  signupUser(user: signupUserTypeRequest) {
    return this.userRepository.signupUser(user);
  }

  signupSocialUser(user: UserModel) {
    return this.userRepository.signupUserBySocial(user);
  }

  login(user: loginUserTypeRequest) {
    return this.userRepository.login(user);
  }
}
