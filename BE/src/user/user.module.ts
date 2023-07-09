import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MysqlModule } from '@/provider/database.module';
import { User } from '@/entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [MysqlModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    User,
  ],
})
export class UserModule {}
