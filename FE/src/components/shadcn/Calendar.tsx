import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/utils/util';
import { buttonVariants } from '@/components/shadcn/Button';
import { nowDate } from '@/utils/date';

type CalendarProps = React.ComponentProps<typeof DayPicker>;

type CustomCalendarPRops = CalendarProps & {
  color?: string;
  price?: { [key: string]: { [key: string]: number } };
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  price,
  color,
  ...props
}: CustomCalendarPRops) {
  const textColor = color || 'text-white';
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: '',
        month: 'space-y-8',
        caption: `flex justify-center pt-1 relative items-center ${textColor}`,
        caption_label: 'text-sm font-spoqa',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: `flex flex-col items-center border-collapse space-y-1 ${textColor}`,
        head_row: 'flex gap-x-2',
        head_cell: 'text-muted-foreground rounded-md w-9 font-normal',
        row: 'flex w-full mt-6 gap-x-2',
        cell: 'text-center relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 cursor-pointer hover:text-cyan',
        day: 'h-12 w-9 p-0 font-normal aria-selected:opacity-100',
        day_selected:
          'bg-white text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className={`h-4 w-4 ${textColor}`} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className={`h-4 w-4 ${textColor}`} />
        ),
        DayContent: ({ date }) => {
          const day = date.getDate();
          const priceDay = price && price[day];
          const { day: nowDay } = nowDate();

          if (!price) {
            return (
              <span className={nowDay === day ? 'text-golden' : ''}>{day}</span>
            );
          }

          return (
            <div className="flex flex-col">
              <div className="flex flex-col absolute top-[-28px] right-0">
                <span className="text-[10px] text-cyan">
                  {priceDay && `+${priceDay.INCOME}`}
                </span>
                <span className="text-[10px] text-silver">
                  {priceDay && `-${priceDay.EXPENDITURE}`}
                </span>
              </div>
              <span className={nowDay === day ? 'text-golden' : ''}>{day}</span>
            </div>
          );
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
