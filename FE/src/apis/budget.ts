import axios from 'axios';

export const getBudgetInfo = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/budget/info`);

    return response.data;
  } catch (err) {
    throw new Error('budget api error');
  }
};
