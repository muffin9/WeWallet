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

  getUserbyEmail(email: string): Promise<UserModel> {
    return this.userRepository.getUserByUserEmail(email);
  }

  signupUser(user: signupUserTypeRequest) {
    return this.userRepository.signupUser(user);
  }

  login(user: loginUserTypeRequest) {
    return this.userRepository.login(user);
  }
}
