import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MysqlModule } from '@/provider/database.module';
import { User } from '@/entities/user.entity';
import { UserRepository } from './user.repository';
import { AuthService } from '@/auth/auth.service';
import { JwtTokenService } from '@/auth/strategies/jwt.strategy';
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
      provide: 'ISessionStore',
      useClass: SessionStore,
    },
    {
      provide: 'ISessionRepository',
      useClass: SessionRepository,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
    User,
  ],
})
export class UserModule {}
