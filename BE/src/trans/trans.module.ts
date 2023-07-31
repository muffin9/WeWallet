import { Module } from '@nestjs/common';
import { TransController } from './trans.controller';
import { TransRepository } from './trans.repository';
import { TransService } from './trans.service';
import { MysqlModule } from '@/provider/database.module';
import { JwtAuthGuard } from '@/auth/auth.middleware';

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
  ],
})
export class TransModule {}
