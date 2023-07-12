export interface ISessionReader {
  getSession(refreshToken: string): Promise<string>;
}
