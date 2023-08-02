import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { transActionTypeRequest } from './interface/transaction';
import { Request, Response } from 'express';
import { TransService } from './trans.service';
import { JwtAuthGuard } from '@/auth/auth.middleware';
import { LocalUserTypeResponse } from '@/auth/interface/local.user';

@Controller('/transaction')
export class TransController {
  constructor(private readonly transService: TransService) {}

  @Get('/')
  getTrans() {
    console.log('getTrans API Wips!!');
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async postTrans(
    @Body() requestTransAction: transActionTypeRequest,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { userId } = req.user as LocalUserTypeResponse;

    return await this.transService.postTrans(requestTransAction, userId);
  }
}
