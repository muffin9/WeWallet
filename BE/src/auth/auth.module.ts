import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { KakaoMiddleWare } from "./kakao.middleware";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [KakaoMiddleWare, AuthService, UserService],
})
export class AuthModule {}
