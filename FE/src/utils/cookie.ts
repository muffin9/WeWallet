import cookie from 'cookie';

export const deleteCookie = (key: string) =>
  cookie.serialize(key, '', {
    expires: new Date(0),
    path: '/',
  });
