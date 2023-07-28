import useModalStore, { ModalType } from '@/store/useModalStore';
import { ModalOkButton, ModalDescription, ModalTitle } from '@/constants/modal';
import Button from '@/components/atoms/Button';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import Modal from '@/components/atoms/Modal';

const ResponseModal = () => {
  const type = useModalStore((state) => state.type) as ModalType;
  const onModalClick = useModalStore((state) => state.onModalClick);
  const toggleModal = useModalStore((state) => state.toggleModal);

  return (
    <Modal
      size="medium"
      onCloseModal={toggleModal}
    >
      {type === 'loading' ? (
        <LoadingSpinner size="medium" />
      ) : (
        <>
          <h1 className="text-xl text-light-black font-bold">
            {ModalTitle[type]}
          </h1>
          <p className="text-xs text-gray">{ModalDescription[type]}</p>
          <Button
            variant="success"
            size="small"
            text={ModalOkButton[type]}
            className="text-xs mt-auto"
            onClick={() => onModalClick()}
          />
        </>
      )}
    </Modal>
  );
};

export default ResponseModal;
