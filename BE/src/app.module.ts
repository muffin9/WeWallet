import { Module } from '@nestjs/common';
import { UserModule } from '@/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@/auth/auth.module';
import { configModuleOptions } from '@/provider/config.module.options';
import { healthCheckController } from '@/healthCheck.controller';
import { MysqlModule } from '@/provider/database.module';

@Module({
  imports: [
    MysqlModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ ...configModuleOptions }),
  ],
  controllers: [healthCheckController],
  providers: [],
})
export class AppModule {}
