import commonLoginConfig from '@/config/common.login.config';
import databaseConfig from '@/config/database.config';
import kakaoLoginConfig from '@/config/kakao.login.config';
import * as path from 'path';

export const configModuleOptions = {
  envFilePath: [path.join(__dirname, '../config/env/.env.dev')],
  load: [databaseConfig, kakaoLoginConfig, commonLoginConfig],
  isGlobal: true,
};
