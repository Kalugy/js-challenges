import React, { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

const HelperButton = ({ label = '', children, className }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Button */}
      <button
        className={`px-1 py-1 rounded`}
        onClick={toggleTooltip}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <FaQuestionCircle />
        {label}
      </button>

      {/* Tooltip (Instructions) */}
      {isOpen && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm rounded p-2 shadow-lg z-10 whitespace-normal max-w-lg"
          style={{
            backgroundColor: theme.background,
            color: theme.textColor,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default HelperButton;


