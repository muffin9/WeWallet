import { Inject, Injectable } from '@nestjs/common';
import { IUserStore } from '../outport/user.store.interface';
import { IUserRepository } from '../user.repository';
import { UserModel } from '../domain/user.model';

@Injectable()
export class UseStore implements IUserStore {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async signupUserBySocial(user: UserModel) {
    const userId = await this.userRepository.signupUserBySocial(user);
    return userId;
  }
}
