export interface ISessionRepository {
  create(refreshToken: string, email: string): Promise<void>;
  deleteByEmail(email: string): Promise<void>;
  getByRefreshToken(refreshToken): Promise<string>;
}
