import axios from 'axios';

export const checkDupliateEmail = async (email: string) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/user/check?email=${email}`,
    );

    return response.data;
  } catch (err) {
    throw new Error('check duplicate email error');
  }
};

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
