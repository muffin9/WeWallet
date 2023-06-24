import { Controller, Get } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll(): Promise<User[]> {
    const users = this.userService.findAll();
    console.log(users);
    return users;
  }
}
