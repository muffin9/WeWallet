import { create } from 'zustand';

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

const useUserStore = create<UserStoreState>((set, get) => ({
  user: {
    userId: 0,
    email: '',
    nickname: '',
  },
  setUser: (user: UserState) =>
    set((state) => ({
      ...state,
      user,
    })),
  getUser: () => get().user,
}));

export default useUserStore;
