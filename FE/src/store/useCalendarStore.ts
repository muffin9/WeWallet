import { nowDate } from '@/utils/date';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CalendarState {
  month: number;
}

const useCalendarStore = create(
  persist(
    (set: Function) => ({
      month: nowDate().month,
      setMonth: (month: number) =>
        set((state: CalendarState) => ({
          ...state,
          month,
        })),
    }),
    { name: 'calendar-store' },
  ),
);

export default useCalendarStore;
