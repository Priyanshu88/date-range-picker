// components/DateRangePicker/Calendar.tsx
import React from 'react';
import { format, isToday, isBefore, startOfDay } from 'date-fns';
import DateCell from './DateCell';
import MonthYearSelector from './MonthYearSelector';
import { generateCalendarDays, isDateInRange, isSameDate } from '../../utils/dateUtils';
import type { DateRange } from '../../utils/dateUtils';

interface CalendarProps {
  currentDate: Date;
  selectedRange: DateRange;
  onDateSelect: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedRange,
  onDateSelect,
  onPrevMonth,
  onNextMonth,
}) => {
  const calendarDays = generateCalendarDays(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isDateDisabled = (date: Date) => {
    return isBefore(date, startOfDay(new Date()));
  };

  return (
    <div className="calendar">
      <MonthYearSelector
        currentDate={currentDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <div className="calendar-grid" role="grid">
        <div className="weekdays-row">
          {weekDays.map(day => (
            <div key={day} className="weekday" role="columnheader">
              {day}
            </div>
          ))}
        </div>
        <div className="dates-grid">
          {calendarDays.map((date, index) => (
            <DateCell
              key={index}
              date={date}
              isDisabled={isDateDisabled(date)}
              isToday={isToday(date)}
              isSelected={
                isSameDate(date, selectedRange.startDate) ||
                isSameDate(date, selectedRange.endDate)
              }
              isInRange={isDateInRange(
                date,
                selectedRange.startDate,
                selectedRange.endDate
              )}
              isRangeStart={isSameDate(date, selectedRange.startDate)}
              isRangeEnd={isSameDate(date, selectedRange.endDate)}
              onClick={onDateSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;