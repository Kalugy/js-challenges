import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

const HelperButton = ({ label = '', children, className }) => {
  const { theme } = useTheme();
  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Button */}
      <button className={`px-1 py-1 rounded `}>
        <FaQuestionCircle />
        {label}
      </button>

      {/* Tooltip (Instructions) */}
      <div 
       className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block text-sm rounded p-2 shadow-lg z-10 whitespace-normal max-w-lg"
        style={{
          backgroundColor: theme.background,
          color: theme.textColor
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HelperButton;
