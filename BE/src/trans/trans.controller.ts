import { Controller, Get } from '@nestjs/common';

@Controller('/trans')
export class TransController {
  constructor() {}
  @Get('/')
  getTrans() {
    console.log('getTrans API Wips!!');
  }
}
