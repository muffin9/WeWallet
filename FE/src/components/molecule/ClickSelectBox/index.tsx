import Label from '@/components/atoms/Label';

interface ClickSelectBoxProps {
  id: string;
  name: string;
  children: React.ReactNode;
}

const ClickSelectBox = ({ id, name, children }: ClickSelectBoxProps) => {
  return (
    <div className="w-full h-14 flex items-center border-solid border-b-[1px] border-silver">
      <Label
        id={id}
        name={name}
        color="text-gray"
        className="w-16"
      />
      {children}
    </div>
  );
};

export default ClickSelectBox;
