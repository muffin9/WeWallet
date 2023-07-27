import commonLoginConfig from '@/config/common.login.config';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @Inject(commonLoginConfig.KEY)
    private readonly config: ConfigType<typeof commonLoginConfig>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies['access-token'];

    if (!token) {
      res.status(401).json({ message: 'Authentication required.' });
      return;
    }

    try {
      const decodedToken = jwt.verify(token, this.config.jwtSecret);
      req.user = decodedToken;

      next();
    } catch (err) {
      res.status(401).json({ message: 'Authentication failed.' });
    }
  }
}
