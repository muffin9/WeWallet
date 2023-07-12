import { Inject, Injectable } from '@nestjs/common';
import { IUserStore } from '../application/user.store.interface';
import { IUserRepository } from './user.repository.interface';
import { UserModel } from '../domain/user.model';

@Injectable()
export class UseStore implements IUserStore {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async create(user: UserModel) {
    const userId = await this.userRepository.create(user);
    return userId;
  }
}
