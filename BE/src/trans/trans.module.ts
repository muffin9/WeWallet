import { Module } from '@nestjs/common';
import { TransController } from './trans.controller';
import { TransRepository } from './trans.repository';
import { TransService } from './trans.service';
import { MysqlModule } from '@/provider/database.module';
import { JwtAuthGuard } from '@/auth/auth.middleware';
import { UserRepository } from '@/user/user.repository';
import { CategoryRepository } from '@/category/category.repository';
import { SubCategoryRepository } from '@/subCategory/subCategory.repository';

@Module({
  imports: [MysqlModule],
  controllers: [TransController],
  providers: [
    TransService,
    JwtAuthGuard,
    {
      provide: 'ITransRepository',
      useClass: TransRepository,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'ICategoryRepository',
      useClass: CategoryRepository,
    },
    { provide: 'ISubCategoryRepository', useClass: SubCategoryRepository },
  ],
})
export class TransModule {}
