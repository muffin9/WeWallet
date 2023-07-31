import { Inject, Injectable } from '@nestjs/common';
import {
  transActionTypeRequest,
  transActionTypeResponse,
} from './interface/transaction';
import { DataSource } from 'typeorm';

export interface ITransRepository {
  postTrans: (
    transActionTypeRequest: transActionTypeRequest,
    userId: number,
  ) => Promise<transActionTypeResponse>;
}

@Injectable()
export class TransRepository implements ITransRepository {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
  ) {}

  async postTrans(data: transActionTypeRequest, userId: number) {
    // const newTransAction = await this.dataSource
    //   .createQueryBuilder()
    //   .insert()
    //   .into(data)
    //   .values({}).execute();

    return { status: 'success' };
  }
}
