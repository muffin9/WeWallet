import { PaymentIdType } from '@/types/payment';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { KeyedObject } from '@/types/common';

interface ScrollAreaProps {
  title: string;
  values: KeyedObject[];
  onClick: (value: number | PaymentIdType) => void;
}

const ScrollArea = ({ title, values, onClick }: ScrollAreaProps) => {
  return (
    <ScrollAreaPrimitive.Root className="w-full h-full rounded overflow-hidden shadow-[0_2px_10px] bg-white">
      <ScrollAreaPrimitive.Viewport className="w-full h-full rounded">
        <div className="py-[15px] px-5">
          <div className="text-violet11 text-[15px] leading-[18px] font-medium">
            {title}
          </div>
          {values.map((value) => {
            return (
              <div
                className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6 cursor-pointer"
                key={value.id}
                onClick={() => onClick(value.id)}
              >
                {value.name}
              </div>
            );
          })}
        </div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className="bg-blackA8" />
    </ScrollAreaPrimitive.Root>
  );
};

export default ScrollArea;
