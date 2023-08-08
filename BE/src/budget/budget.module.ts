import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetRepository } from './budget.repository';
import { UserRepository } from '@/user/user.repository';
import { BudgetService } from './budget.service';
import { MysqlModule } from '@/provider/database.module';
import { TransRepository } from '@/trans/trans.repository';
@Module({
  imports: [MysqlModule],
  controllers: [BudgetController],
  providers: [
    BudgetService,
    {
      provide: 'IBudgetRepository',
      useClass: BudgetRepository,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    { provide: 'ITransRepository', useClass: TransRepository },
  ],
})
export class BudgetModule {}
