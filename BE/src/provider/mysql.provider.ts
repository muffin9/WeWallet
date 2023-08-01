import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { ConfigType } from '@nestjs/config';
import databaseConfig from '@/config/database.config';
import { User } from '@/entities/user.entity';
import { SessionEntity } from '@/auth/session/session.entity';
import { Category } from '@/entities/category.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import { Transaction } from '@/entities/transaction.entity';

export const mysqlProvider = {
  inject: [databaseConfig.KEY],
  provide: 'DATA_SOURCE',
  useFactory: async (config: ConfigType<typeof databaseConfig>) => {
    const dataSource = new DataSource({
      type: 'mysql',
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.db,
      entities: [User, SessionEntity, Transaction, Category, SubCategory],
      namingStrategy: new SnakeNamingStrategy(),
      logging: true,
      synchronize: config.database.synchronize,
    });
    await dataSource.initialize();
    return addTransactionalDataSource(dataSource);
  },
};
