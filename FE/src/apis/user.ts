import { SignupFormData } from '@/types/auth';
import axios from 'axios';

export const postSignupUser = async (signupData: SignupFormData) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/user`,
      signupData,
    );

    return response.data;
  } catch (err) {
    throw new Error('postSignup user api error');
  }
};
