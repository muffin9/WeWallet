import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MysqlModule } from '@/provider/database.module';
import { UserRepository } from './user.repository';
import { AuthService } from '@/auth/auth.service';
import { JwtTokenService } from '@/auth/strategies/jwt.strategy';
import { UserReader } from './infrastructure/user.reader';
import { UseStore } from './infrastructure/user.store';
import { SessionStore } from '@/auth/session/session.store';
import { SessionRepository } from '@/auth/session/session.repository';

@Module({
  imports: [MysqlModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'SessionUseCase',
      useClass: AuthService,
    },
    {
      provide: 'TokenService',
      useClass: JwtTokenService,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    {
      provide: 'IUserReader',
      useClass: UserReader,
    },
    {
      provide: 'IUserStore',
      useClass: UseStore,
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
  exports: ['IUserReader', 'IUserStore'],
})
export class UserModule {}
