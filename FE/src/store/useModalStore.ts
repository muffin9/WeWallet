import { create } from 'zustand';

export type ModalType =
  | 'default'
  | 'loading'
  | 'isDuplicateEmail'
  | 'isNotDuplicateEmail'
  | 'signup'
  | 'login';

interface ModalState {
  type: ModalType;
  isShowModal: boolean;
  toggleModal: () => void;
  setType: (type: ModalType) => void;
}

const useModalStore = create<ModalState>((set) => ({
  type: 'default',
  isShowModal: false,
  toggleModal: () =>
    set((state) => ({
      ...state,
      isShowModal: !state.isShowModal,
    })),
  setType: (type: ModalType) =>
    set((state) => ({
      ...state,
      type,
      isShowModal: !state.isShowModal,
    })),
}));

export default useModalStore;
