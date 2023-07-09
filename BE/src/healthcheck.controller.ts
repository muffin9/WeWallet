import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class healthCheckController {
  @Get('/')
  healthChecker() {
    return 'ok';
  }
}
