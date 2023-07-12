import { Inject } from '@nestjs/common';
import { IUserRepository } from './user.repository.interface';

export class UserReader implements UserReader {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  public async findAll() {
    return await this.userRepository.findAll();
  }

  public async getUserByEmail(email: string) {
    const user = await this.userRepository.getUserByUserEmail(email);
    return user;
  }
}
