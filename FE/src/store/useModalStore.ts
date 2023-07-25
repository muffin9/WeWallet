import { create } from 'zustand';

export type ModalType =
  | 'default'
  | 'checkDuplicateEmail'
  | 'isDuplicateEmail'
  | 'isNotDuplicateEmail'
  | 'signup'
  | 'login'
  | 'checkEmail'
  | 'checkPassword'
  | 'loading';

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
    })),
}));

export default useModalStore;
