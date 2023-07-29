interface BottomPopupProps {
  children: React.ReactNode;
  closePopup: () => void;
  className?: string;
}

const BottomPopup = ({ children, closePopup, className }: BottomPopupProps) => {
  return (
    <>
      <div
        className="overlay"
        onClick={closePopup}
      />
      <div
        className={`${className} w-full fixed left-0 bottom-0 flex justify-center bg-white border-solid border-[1px] border-silver rounded-2xl z-[1000]`}
      >
        {children}
      </div>
    </>
  );
};

export default BottomPopup;
