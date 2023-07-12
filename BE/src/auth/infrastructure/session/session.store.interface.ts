export interface ISessionStore {
  create(refreshToken: string, email: string): Promise<void>;
  deleteByEmail(email: string): Promise<void>;
}
