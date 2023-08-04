import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { KeyedObject } from '@/types/common';

export const formatPriceWithCommas = (price: number) => {
  if (isNaN(price)) {
    return 'Invalid input';
  }

  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setObjectKeys = (
  objArray: KeyedObject[],
  keys: string[],
): KeyedObject[] => {
  return objArray.map((obj) => {
    const newObj: KeyedObject = {};
    Object.keys(obj).forEach((key, index) => {
      if (keys[index]) {
        newObj[keys[index]] = obj[key];
      }
    });
    return newObj;
  });
};
