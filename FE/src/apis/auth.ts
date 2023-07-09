import axios from 'axios';

export const kakaoAuth = async (code: string | string[]) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/auth/kakao`, {
      code,
    });

    return response;
  } catch (err) {
    throw new Error(`Auth Error: ${err}`);
  }
};
