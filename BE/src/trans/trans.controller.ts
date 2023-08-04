import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { transActionTypeRequest } from './interface/transaction';
import { Request } from 'express';
import { TransService } from './trans.service';
import { JwtAuthGuard } from '@/auth/auth.middleware';
import { LocalUserTypeResponse } from '@/auth/interface/local.user';

@Controller('/transaction')
export class TransController {
  constructor(private readonly transService: TransService) {}

  @Get('/')
  getTrans(@Query('month') month: number): Promise<{
    status: string;
    all: { [key: string]: number };
    date: { [key: string]: { [key: string]: number } };
  }> {
    return this.transService.getTrans(month);
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async postTrans(
    @Body() requestTransAction: transActionTypeRequest,
    @Req() req: Request,
  ): Promise<{ status: string }> {
    const { userId } = req.user as LocalUserTypeResponse;

    return await this.transService.postTrans(requestTransAction, userId);
  }
}
