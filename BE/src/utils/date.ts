export const getDaysInThisMonth = () => {
  const today = new Date();
  const nextMonth = new Date(today);

  nextMonth.setMonth(today.getMonth() + 1);
  nextMonth.setDate(0);

  return nextMonth.getDate();
};
