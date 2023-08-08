import axios from 'axios';

export const getBudgetInfo = async (month: number) => {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/budget/info?month=${month}`,
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (err) {
    throw new Error('budget info api error');
  }
};

export const setBudget = async ({
  month,
  budgetPrice,
}: {
  month: number;
  budgetPrice: number;
}) => {
  try {
    const response = await axios.patch(
      `${process.env.API_URL}/budget`,
      { month, budgetPrice },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (err) {
    throw new Error('budget set api error');
  }
};
