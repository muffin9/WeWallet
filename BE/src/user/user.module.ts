import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MysqlModule } from '@/provider/database.module';
import { UserRepository } from './user.repository';
import { UserReader } from './infrastructure/user.reader';
import { UseStore } from './infrastructure/user.store';

@Module({
  imports: [MysqlModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserUseCase',
      useClass: UserService,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IUserReader',
      useClass: UserReader,
    },
    {
      provide: 'IUserStore',
      useClass: UseStore,
    },
  ],
  exports: ['IUserReader', 'IUserStore'],
})
export class UserModule {}
