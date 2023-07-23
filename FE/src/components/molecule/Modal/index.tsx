import ReactDom from 'react-dom';

type SizeType = 'small' | 'medium' | 'large';

interface ModalProps {
  title: string;
  description?: string;
  size?: SizeType;
  children?: React.ReactNode;
  handleClose: () => void;
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

const Modal = ({
  title,
  description,
  size = 'medium',
  children,
  handleClose,
  ...restProps
}: ModalProps) => {
  const sizeClass = calculatedSizeClasses(size);
  return ReactDom.createPortal(
    <>
      <div
        className="fixed top-0 right-0 bottom-0 left-0 z-[999] bg-black opacity-60"
        onClick={handleClose}
      />
      <section
        className={`${sizeClass} flex flex-col items-center gap-y-2 fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded-lg z-[999] bg-white font-pretendard`}
        {...restProps}
      >
        <h1 className="text-xl text-light-black font-bold">{title}</h1>
        <p className="text-xs text-gray">{description}</p>
        {children}
      </section>
    </>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export default Modal;
