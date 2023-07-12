import { Inject } from '@nestjs/common';
import { ISessionRepository } from './session.repository.interface';
import { ISessionStore } from './session.store.interface';

export class SessionStore implements ISessionStore {
  constructor(
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository,
  ) {}
  async deleteByEmail(email: string) {
    await this.sessionRepository.deleteByEmail(email);
  }

  public async create(refreshToken: string, email: string) {
    await this.sessionRepository.create(refreshToken, email);
  }
}
