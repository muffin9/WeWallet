import { registerAs } from '@nestjs/config';

export default registerAs('commonLogin', () => ({
  jwtSecret: process.env.JWT_SECRET,
  accessExpiresIn: +process.env.ACCESS_TOKEN_EXPIRES,
  refreshExpiresIn: process.env.REFRESH_TOKEN_EXPIRES,
}));
