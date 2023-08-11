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

export const postOrPatchTransAction = async (
  transactionData: TypeTransactions,
  detailId: number | undefined,
) => {
  try {
    if (detailId) {
      const response = await axios.patch(
        `${process.env.API_URL}/transaction`,
        { id: detailId, ...transactionData },
        { withCredentials: true },
      );
      return response.data;
    } else {
      const response = await axios.post(
        `${process.env.API_URL}/transaction`,
        transactionData,
        { withCredentials: true },
      );
      return response.data;
    }
  } catch (err) {
    throw new Error('transaction post api error');
  }
};

export const deleteTransAction = async (id: number) => {
  try {
    if (!id) return;
    const response = await axios.delete(
      `${process.env.API_URL}/transaction?id=${id}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (err) {
    throw new Error('transaction delete api error');
  }
};
