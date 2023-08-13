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

export const restoreAccessToken = async (refreshToken: string) => {
  try {
    await axios.post(
      `${process.env.API_URL}/api/auth/access-token/restore`,
      { user: { email: 'jinlog9@gmail.com', nickname: 'muffin', userId: 2 } },
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
  } catch (err) {
    throw new Error(`restoreAccessToken Error: ${err}`);
  }
};
