import { TypeTransactions } from '@/components/organism/main/AddTranModal';
import axios from 'axios';

export const getTransAction = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/transaction`);

    return response.data;
  } catch (err) {
    throw new Error('transaction get api error');
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
