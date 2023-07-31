import { Module } from '@nestjs/common';
import { TransController } from './trans.controller';
import { TransRepository } from './trans.repository';
import { TransService } from './trans.service';
import { MysqlModule } from '@/provider/database.module';
import { UserService } from '@/user/user.service';
import { UserRepository } from '@/user/user.repository';

@Module({
  imports: [MysqlModule],
  controllers: [TransController],
  providers: [
    TransService,
    UserService,
    {
      provide: 'ITransRepository',
      useClass: TransRepository,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class TransModule {}
