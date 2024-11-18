import React from 'react';
import { format } from 'date-fns';

interface MonthYearSelectorProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const MonthYearSelector: React.FC<MonthYearSelectorProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <div className="month-year-selector">
      <button
        onClick={onPrevMonth}
        className="nav-button"
        aria-label="Previous month"
      >
        ◀
      </button>
      <span className="current-month-year">
        {format(currentDate, 'MMMM yyyy')}
      </span>
      <button
        onClick={onNextMonth}
        className="nav-button"
        aria-label="Next month"
      >
        ▶
      </button>
    </div>
  );
};

export default MonthYearSelector;