import axios from 'axios';

export const kakaoAuth = async () => {
  const response = await axios.get(`${process.env.API_URL}/api/auth/kakao`);

  try {
  } catch (err) {
    throw new Error(`${err}`);
  }
};
