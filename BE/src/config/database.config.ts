import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_USER_PASSWORD,
    db: process.env.DATABASE_DB,
    synchronize: Boolean(process.env.synchronize),
  },
}));
