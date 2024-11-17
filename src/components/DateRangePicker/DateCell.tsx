// components/DateRangePicker/DateCell.tsx
import React from 'react';
import { isSameDate, isDateInRange } from '../../utils/dateUtils';

interface DateCellProps {
  date: Date;
  isDisabled?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  onClick: (date: Date) => void;
}

const DateCell: React.FC<DateCellProps> = ({
  date,
  isDisabled = false,
  isToday = false,
  isSelected = false,
  isInRange = false,
  isRangeStart = false,
  isRangeEnd = false,
  onClick,
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onClick(date);
    }
  };

  const getCellClassName = () => {
    const baseClass = 'date-cell';
    const classes = [baseClass];

    if (isDisabled) classes.push('disabled');
    if (isToday) classes.push('today');
    if (isSelected) classes.push('selected');
    if (isInRange) classes.push('in-range');
    if (isRangeStart) classes.push('range-start');
    if (isRangeEnd) classes.push('range-end');

    return classes.join(' ');
  };

  return (
    <button
      className={getCellClassName()}
      onClick={handleClick}
      disabled={isDisabled}
      aria-label={`Select ${date.toLocaleDateString()}`}
      role="gridcell"
    >
      {date.getDate()}
    </button>
  );
};

export default DateCell;