import ReactDom from 'react-dom';
import useModalStore from '@/store/useModalStore';

type SizeType = 'small' | 'medium' | 'large';

interface ModalProps {
  children: React.ReactNode;
  size: SizeType;
}

const calculatedSizeClasses = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small': {
      return 'w-48 h-32 p-4';
    }
    case 'medium': {
      return 'w-72 h-48 p-6';
    }
    case 'large': {
      return 'w-84 h-56 p-8';
    }
  }
};

const Modal = ({ children, size, ...restProps }: ModalProps) => {
  const isShowModal = useModalStore((state) => state.isShowModal);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const sizeClass = calculatedSizeClasses(size);

  return ReactDom.createPortal(
    <>
      <div
        className="fixed top-0 right-0 bottom-0 left-0 z-[999] bg-black opacity-60"
        onClick={toggleModal}
      />
      <section
        className={`${sizeClass} flex flex-col items-center gap-y-2 fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded-lg z-[999] bg-white font-pretendard`}
        {...restProps}
      >
        {children}
      </section>
    </>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
