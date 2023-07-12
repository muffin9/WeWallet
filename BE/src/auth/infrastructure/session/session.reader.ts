import { Inject } from '@nestjs/common';
import { ISessionRepository } from './session.repository.interface';
import { ISessionReader } from './session.reader.interface';

export class SessionReader implements ISessionReader {
  constructor(
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository,
  ) {}

  public async getSession(requestRefreshToken: string) {
    const refreshToken = await this.sessionRepository.getByRefreshToken(
      requestRefreshToken,
    );
    return refreshToken;
  }
}
