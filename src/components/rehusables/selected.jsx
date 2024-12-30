
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
const Select = ({selectedOption, setSelectedOption}) => {
  const { theme } = useTheme()
  const options = [
    { label: 'String', value: 'string' },
    { label: 'Array', value: 'array' },
    { label: 'Object', value: 'object' },
    { label: 'Algorithms', value: 'algorithms' },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{
            backgroundColor: theme.secondaryBg,
            color: theme.textColor
    }}>
      <select value={selectedOption} onChange={handleChange}
        style={{
          backgroundColor: theme.background,
          color: theme.textColor
        }}
        className='p-2 cursor-pointer rounded'
      >
        <option value="" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default Select;
