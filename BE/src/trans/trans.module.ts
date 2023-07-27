import { Module } from '@nestjs/common';
import { TransController } from './trans.controller';

@Module({
  imports: [],
  controllers: [TransController],
  providers: [],
})
export class TransModule {}
