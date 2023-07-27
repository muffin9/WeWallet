interface TokenPayload {
  exp: number;
}

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;

  try {
    const tokenPayload: TokenPayload = JSON.parse(atob(token.split('.')[1]));

    const expirationTime = tokenPayload.exp * 1000;

    return Date.now() >= expirationTime;
  } catch (error) {
    console.error('Error parsing token:', error);
    return true;
  }
};
