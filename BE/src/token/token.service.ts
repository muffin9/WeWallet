export interface TokenService {
  createAccessToken(value: any): Promise<string>;
  createRefreshToken(value: any): Promise<string>;
}
