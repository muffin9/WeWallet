interface BottomPopupProps {
  children: React.ReactNode;
  closePopup: () => void;
}

const BottomPopup = ({ children, closePopup }: BottomPopupProps) => {
  return (
    <>
      <div
        className="overlay"
        onClick={closePopup}
      />
      <div className="w-full p-8 fixed left-0 bottom-0 flex justify-center bg-white border-solid border-[1px] border-success rounded-2xl z-[1000]">
        {children}
      </div>
    </>
  );
};

export default BottomPopup;
