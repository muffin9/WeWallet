import { Module } from '@nestjs/common';
import { UserModule } from '@/user/user.module';
import { MysqlModule } from '../provider/database.module';
import { AuthController } from './auth.controller';
import { KakaoStrategy } from './strategies/kakao.strategy';
import { AuthService } from './auth.service';
import { JwtTokenService } from './strategies/jwt.strategy';
import { SessionStore } from './session/session.store';
import { SessionRepository } from './session/session.repository';

@Module({
  imports: [UserModule, MysqlModule],
  controllers: [AuthController],
  providers: [
    KakaoStrategy,
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
  ],
})
export class AuthModule {}
