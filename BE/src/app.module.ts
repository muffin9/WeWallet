import { Module } from '@nestjs/common';
import { UserModule } from '@/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@/auth/auth.module';
import { configModuleOptions } from '@/provider/config.module.options';
import { healthCheckController } from '@/healthCheck.controller';
import { MysqlModule } from '@/provider/database.module';
import { TransModule } from './trans/trans.module';
import { CategoryModule } from './category/category.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [
    MysqlModule,
    AuthModule,
    UserModule,
    CategoryModule,
    TransModule,
    BudgetModule,
    ConfigModule.forRoot({ ...configModuleOptions }),
  ],
  controllers: [healthCheckController],
  providers: [],
})
export class AppModule {}
