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
  setType: (type: ModalType, onModalClickCallFunc?: Function) => void;
  onModalClick: Function;
}

const useModalStore = create<ModalState>((set) => ({
  type: 'default',
  isShowModal: false,
  toggleModal: () =>
    set((state) => ({
      ...state,
      isShowModal: !state.isShowModal,
    })),
  setType: (type: ModalType, onModalClickCallFunc?: Function) =>
    set((state) => ({
      ...state,
      type,
      onModalClick: onModalClickCallFunc || state.toggleModal,
    })),
  onModalClick: () => {},
}));

export default useModalStore;
