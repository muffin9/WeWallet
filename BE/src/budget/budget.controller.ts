import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Request } from 'express';
import { LocalUserTypeResponse } from '@/auth/interface/local.user';
import { budgetInfoTypeResponse, budgetTypeRequest } from './interface/budget';
import { JwtAuthGuard } from '@/auth/auth.middleware';

@Controller('/budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get('/info')
  @UseGuards(JwtAuthGuard)
  async getBudgetInfo(
    @Query('month') month: number,
    @Req() req: Request,
  ): Promise<budgetInfoTypeResponse> {
    const { userId } = req.user as LocalUserTypeResponse;
    return await this.budgetService.getBudgetInfo(month, userId);
  }

  @Patch('/')
  @UseGuards(JwtAuthGuard)
  patchBudget(
    @Req() req: Request,
    @Body() requestBudget: budgetTypeRequest,
  ): Promise<{ status: string }> {
    const { userId } = req.user as LocalUserTypeResponse;
    return this.budgetService.patchBudget(requestBudget, userId);
  }
}
