import ReactDom from 'react-dom';

type SizeType = 'small' | 'medium' | 'large' | 'addTran';

interface ModalProps {
  children: React.ReactNode;
  size: SizeType;
  onCloseModal: () => void;
}

const calculatedSizeClasses = (
  size: 'small' | 'medium' | 'large' | 'addTran',
) => {
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
    case 'addTran': {
      return 'w-102 h-auto p-16';
    }
  }
};

const Modal = ({ children, size, onCloseModal, ...restProps }: ModalProps) => {
  const sizeClass = calculatedSizeClasses(size);

  return ReactDom.createPortal(
    <>
      <div
        className="overlay"
        onClick={onCloseModal}
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
