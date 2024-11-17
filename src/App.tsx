import React from 'react';
import DateRangePicker from './components/DateRangePicker/DateRangePicker';
import type { DateRange } from './utils/dateUtils';

const App: React.FC = () => {
  const handleDateRangeChange = (range: DateRange) => {
    console.log('Selected range:', range);
  };

  return (
    <div className="app">
      <DateRangePicker 
        onChange={handleDateRangeChange}
        maxRange={30}
        disablePastDates={true}
      />
    </div>
  );
};

export default App;