import { User } from '../entities/user.entity';
import { UserModel } from './domain/user.model';
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

  getUserbyEmail(email: string): Promise<UserModel> {
    return this.userRepository.getUserByUserEmail(email);
  }

  createUser(user: signupUserTypeRequest) {
    return this.userRepository.createUser(user);
  }
}
