import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
}

interface UserStoreState {
  user: UserState;
  setUser: (user: UserState) => void;
  getUser: () => UserState;
}

const useUserStore = create(
  persist(
    (set: Function, get: Function) => ({
      user: {
        userId: 0,
        email: '',
        nickname: '',
      },
      setUser: (user: UserState) =>
        set((state: UserStoreState) => ({
          ...state,
          user,
        })),
      getUser: () => get().user,
    }),
    { name: 'user-store' },
  ),
);

export default useUserStore;
