import { LoginFormData, SignupFormData } from '@/types/auth';
import axios from 'axios';

export const postSignupUser = async (signupData: SignupFormData) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/user`,
      signupData,
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    throw new Error('postSignup user api error');
  }
};

export const postLoginUser = async (loginData: LoginFormData) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/user/login`,
      loginData,
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    throw new Error('postLogin user api error');
  }
};
