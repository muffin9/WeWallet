import { Inject } from '@nestjs/common';
import { IUserRepository } from '../user.repository';

export class UserReader implements UserReader {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  public async getUserByEmail(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    return user;
  }
}
