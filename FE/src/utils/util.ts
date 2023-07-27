import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const formatPriceWithCommas = (price: number) => {
  if (isNaN(price)) {
    return 'Invalid input';
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
