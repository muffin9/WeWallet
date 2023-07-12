import { Module } from '@nestjs/common';
import { UserModule } from '@/user/user.module';
import { MysqlModule } from '../provider/database.module';
import { AuthController } from './interface/auth.controller';
import { KakaoStrategy } from './infrastructure/strategies/kakao.strategy';
import { AuthService } from './application/auth.service';
import { JwtTokenService } from './infrastructure/strategies/jwt.strategy';
import { SessionStore } from './infrastructure/session/session.store';
import { SessionRepository } from './infrastructure/session/session.repository';
import { LocalAccessStrategy } from './infrastructure/strategies/local.access.strategy';
import { LocalRefreshStrategy } from './infrastructure/strategies/local.refresh.strategy';
import { SessionReader } from './infrastructure/session/session.reader';

@Module({
  imports: [UserModule, MysqlModule],
  controllers: [AuthController],
  providers: [
    KakaoStrategy,
    LocalAccessStrategy,
    LocalRefreshStrategy,
    {
      provide: 'SessionUseCase',
      useClass: AuthService,
    },
    {
      provide: 'TokenService',
      useClass: JwtTokenService,
    },
    {
      provide: 'ISessionStore',
      useClass: SessionStore,
    },
    {
      provide: 'ISessionRepository',
      useClass: SessionRepository,
    },
    {
      provide: 'ISessionReader',
      useClass: SessionReader,
    },
  ],
  exports: [LocalAccessStrategy, LocalRefreshStrategy],
})
export class AuthModule {}
