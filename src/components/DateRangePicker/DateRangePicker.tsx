// components/DateRangePicker/DateRangePicker.tsx
import React, { useState } from 'react';
import Calendar from './Calendar';
import { formatDate, getNextMonth, getPrevMonth } from '../../utils/dateUtils';
import type { DateRange } from '../../utils/dateUtils';
import './styles.scss';

interface DateRangePickerProps {
  onChange?: (range: DateRange) => void;
  maxRange?: number; // Maximum number of days allowed in range
  disablePastDates?: boolean;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChange,
  maxRange = 30,
  disablePastDates = true,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const handleDateSelect = (date: Date) => {
    setSelectedRange(prev => {
      let newRange: DateRange;

      if (!prev.startDate || (prev.startDate && prev.endDate)) {
        // Start new selection
        newRange = {
          startDate: date,
          endDate: null,
        };
      } else {
        // Complete the range
        if (date < prev.startDate) {
          newRange = {
            startDate: date,
            endDate: prev.startDate,
          };
        } else {
          newRange = {
            startDate: prev.startDate,
            endDate: date,
          };
        }
      }

      onChange?.(newRange);
      return newRange;
    });
  };

  return (
    <div className="date-range-picker">
      <h2>Select Date Range</h2>
      <Calendar
        currentDate={currentDate}
        selectedRange={selectedRange}
        onDateSelect={handleDateSelect}
        onPrevMonth={() => setCurrentDate(getPrevMonth(currentDate))}
        onNextMonth={() => setCurrentDate(getNextMonth(currentDate))}
      />
      <div className="selected-range">
        <div>Start Date: {formatDate(selectedRange.startDate)}</div>
        <div>End Date: {formatDate(selectedRange.endDate)}</div>
      </div>
    </div>
  );
};

export default DateRangePicker;