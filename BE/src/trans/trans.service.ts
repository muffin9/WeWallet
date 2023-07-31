import { Inject } from '@nestjs/common';
import { transActionTypeRequest } from './interface/transaction';
import { ITransRepository } from './trans.repository';

export class TransService {
  constructor(
    @Inject('ITransRepository')
    private readonly userRepository: ITransRepository,
  ) {}

  postTrans(requestTransAction: transActionTypeRequest, userId: number) {
    return this.userRepository.postTrans(requestTransAction, userId);
  }
}
