import { TypeTransactions } from '@/components/organism/AddTranModal';
import axios from 'axios';

export const getTransAction = async (month: number) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/transaction?month=${month}`,
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    throw new Error('transaction get api error');
  }
};

export const getTransActionDetail = async (month: number, day: number) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/transaction/detail?month=${month}&day=${day}`,
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    throw new Error('transaction get detail api error');
  }
};

export const postTransAction = async (transactionData: TypeTransactions) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/transaction`,
      transactionData,
      { withCredentials: true },
    );

    return response.data;
  } catch (err) {
    throw new Error('transaction post api error');
  }
};
