import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  transActionDetailTypeResponse,
  transActionGetTransResponse,
  transActionPostTypeRequest,
  transActionPostTypeResponse,
} from './interface/transaction';
import { Request } from 'express';
import { TransService } from './trans.service';
import { JwtAuthGuard } from '@/auth/auth.middleware';
import { LocalUserTypeResponse } from '@/auth/interface/local.user';

@Controller('/transaction')
export class TransController {
  constructor(private readonly transService: TransService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  getTrans(
    @Query('month') month: number,
    @Req() req: Request,
  ): Promise<transActionGetTransResponse> {
    const { userId } = req.user as LocalUserTypeResponse;
    return this.transService.getTrans(month, userId);
  }

  @Get('/detail')
  @UseGuards(JwtAuthGuard)
  getTransDetail(
    @Query('month') month: number,
    @Query('day') day: number,
    @Req() req: Request,
  ): Promise<transActionDetailTypeResponse> {
    const { userId } = req.user as LocalUserTypeResponse;
    return this.transService.getTransDetail(month, day, userId);
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async postTrans(
    @Body() requestTransAction: transActionPostTypeRequest,
    @Req() req: Request,
  ): Promise<transActionPostTypeResponse> {
    const { userId } = req.user as LocalUserTypeResponse;

    return await this.transService.postTrans(requestTransAction, userId);
  }
}
