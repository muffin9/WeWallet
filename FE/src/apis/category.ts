import axios from 'axios';

export const getAllCategory = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/category/all`);

    return response.data;
  } catch (err) {
    throw new Error('all category api error');
  }
};
