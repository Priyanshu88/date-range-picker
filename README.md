# Custom Date Range Picker Component

A modern, accessible, and customizable date range picker component built with React and TypeScript. This component provides an intuitive interface for selecting date ranges with various customization options and built-in accessibility features.

## 🚀 Features

- 📅 Dual-pane calendar interface
- 🎯 Intuitive date range selection
- ⌨️ Full keyboard navigation support
- ♿ ARIA-compliant accessibility
- 📱 Responsive design
- 🎨 Customizable styling
- 🔒 Date range constraints
- 🎭 Multiple display modes

## 🛠 Technologies Used

- React 18.x
- TypeScript 4.x
- date-fns for date manipulation
- SCSS for styling
- React Testing Library for unit tests

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Priyanshu88/date-range-picker/
cd date-range-picker
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install date-fns @testing-library/react @testing-library/user-event
```

## 📁 Project Structure

```
src/
|-- components/
|   |-- DateRangePicker/
|   |   |-- DateRangePicker.tsx    # Main component
|   |   |-- Calendar.tsx           # Calendar grid component
|   |   |-- MonthYearSelector.tsx  # Month/year navigation
|   |   |-- DateCell.tsx           # Individual date cell
|   |   |-- styles.scss           # Component styles
|-- utils/
|   |-- dateUtils.ts              # Date manipulation utilities
|-- App.tsx
|-- index.tsx
```

## 💻 Usage

```tsx
import { DateRangePicker } from './components/DateRangePicker';
import type { DateRange } from './utils/dateUtils';

function App() {
  const handleDateRangeChange = (range: DateRange) => {
    console.log('Selected range:', range);
  };

  return (
    <DateRangePicker
      onChange={handleDateRangeChange}
      maxRange={30}
      disablePastDates={true}
    />
  );
}
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onChange | `(range: DateRange) => void` | - | Callback function when date range changes |
| maxRange | `number` | 30 | Maximum number of days allowed in range |
| disablePastDates | `boolean` | true | Whether to disable selection of past dates |

## 🏗 Architecture Overview

### Component Hierarchy

1. **DateRangePicker (Root)**
   - Manages the overall state of the date selection
   - Handles date range validation and constraints
   - Provides the public API for the component

2. **Calendar**
   - Renders the calendar grid
   - Manages month/year navigation
   - Handles date cell interactions

3. **MonthYearSelector**
   - Provides month and year navigation controls
   - Displays current month/year

4. **DateCell**
   - Renders individual date cells
   - Handles individual date selection
   - Manages visual states (selected, disabled, in-range)

### Key Design Decisions

1. **State Management**
   - Uses React's useState for local state management
   - Implements controlled component pattern for external state integration
   - Maintains a single source of truth for selected dates

2. **Date Manipulation**
   - Utilizes date-fns for consistent date operations
   - Encapsulates date logic in utility functions
   - Maintains timezone consistency

3. **Accessibility**
   - Implements ARIA attributes for screen readers
   - Supports keyboard navigation
   - Provides clear visual feedback for all interactions

4. **Styling**
   - Uses SCSS for maintainable styles
   - Implements BEM methodology for CSS class names
   - Provides customization points through CSS variables

## 🎯 Implementation Details

### Date Selection Logic

The date selection follows a two-step process:
1. First click sets the start date
2. Second click sets the end date (if after start date) or updates start date (if before)

### Range Validation

- Validates date ranges against maxRange prop
- Prevents selection of disabled dates
- Ensures end date is after start date

### Performance Optimization

- Memoizes expensive calculations
- Uses CSS transforms for animations
- Implements lazy loading for calendar days

### Accessibility Features

- Keyboard navigation support (Arrow keys, Tab, Enter)
- ARIA labels for interactive elements
- Screen reader announcements for date selection

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Tests cover:
- Component rendering
- Date selection functionality
- Keyboard navigation
- Range validation
- Edge cases

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by modern date picker implementations
- Built with accessibility best practices from WAI-ARIA
- Utilizes patterns from React component design best practices
