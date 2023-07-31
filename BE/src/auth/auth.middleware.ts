import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwService from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const accessToken = request.cookies['access-token'];

    if (!accessToken) {
      throw new UnauthorizedException('Invalid credentials');
    }

    try {
      const decodedToken = jwService.decode(accessToken);
      request.user = decodedToken;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
