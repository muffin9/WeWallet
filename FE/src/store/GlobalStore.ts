import { create } from 'zustand';

type THEME = 'dark' | 'light';

interface GlobalStoreState {
  theme: THEME;
  toggleTheme: () => void;
}

const GlobalStore = create<GlobalStoreState>((set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));

export default GlobalStore;
