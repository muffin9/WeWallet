import { Inject, Injectable } from '@nestjs/common';
import { SessionEntity } from './session.entity';
import { ISessionRepository } from './session.repository.interface';
import { DataSource } from 'typeorm';

@Injectable()
export class SessionRepository implements ISessionRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async create(refreshToken: string, email: string) {
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(SessionEntity)
      .values({ refreshToken, email })
      .execute();
  }
  async getByRefreshToken(refreshToken: any) {
    const sessionEntity = await this.dataSource
      .createQueryBuilder(SessionEntity, 'session')
      .where('session.refreshToken = :refreshToken', { refreshToken })
      .getOne();
    if (!sessionEntity) return null;
    return sessionEntity.refreshToken;
  }

  async deleteByEmail(email: string) {
    await this.dataSource
      .createQueryBuilder(SessionEntity, 'session')
      .delete()
      .where('session.email= :email', { email })
      .execute();
  }
}
