// utils/dateUtils.ts
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isWithinInterval, addMonths, isSameDay } from 'date-fns';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export const generateCalendarDays = (date: Date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
};

export const isDateInRange = (date: Date, startDate: Date | null, endDate: Date | null): boolean => {
  if (!startDate || !endDate) return false;
  return isWithinInterval(date, { start: startDate, end: endDate });
};

export const formatDate = (date: Date | null): string => {
  if (!date) return 'None';
  return format(date, 'MMM dd, yyyy');
};

export const isSameDate = (date1: Date | null, date2: Date | null): boolean => {
  if (!date1 || !date2) return false;
  return isSameDay(date1, date2);
};

export const getNextMonth = (date: Date): Date => addMonths(date, 1);
export const getPrevMonth = (date: Date): Date => addMonths(date, -1);