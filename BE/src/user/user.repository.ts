import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserModel } from './domain/user.model';
import { UserEntity } from './infrastructure/user.entity';
import { IUserRepository } from './infrastructure/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async create(user: UserModel) {
    const { id, ...properties } = user.getProperties();

    const result = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({ ...properties })
      .execute();
    return result.generatedMaps[0].id;
  }

  async getUserByUserEmail(email: string) {
    const user = await this.dataSource
      .createQueryBuilder(UserEntity, 'user')
      .where('user.email = :email', { email })
      .getOne();
    if (!user) return null;
    return user.toModel();
  }

  async findAll() {
    const users = await this.dataSource
      .createQueryBuilder(UserEntity, 'user')
      .getMany();
    return users;
  }
}
