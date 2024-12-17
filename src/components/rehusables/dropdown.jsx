import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Dropdown({ title, children }) {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border rounded shadow-sm">
      {/* Dropdown Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left transition flex justify-between items-center"
        style={{
          backgroundColor: theme.secondaryBg,
          color: theme.textColor
        }}
      >
        <span className="font-semibold ">{title}</span>
        <span className="">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="p-4 "
          style={{
            backgroundColor: theme.secondaryBg,
            color: theme.textColor
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
