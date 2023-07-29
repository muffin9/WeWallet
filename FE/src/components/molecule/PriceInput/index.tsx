import Input from '@/components/atoms/Input';

interface PriceInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceInput = ({ value, onChange }: PriceInputProps) => {
  return (
    <div className="w-72 relative">
      <Input
        type="text"
        name="price"
        placeholder="금액을 입력해주세요"
        value={value}
        onChange={onChange}
        maxLen={12}
      />
      <div className="absolute bottom-0 right-0 text-xl">원</div>
    </div>
  );
};

export default PriceInput;
