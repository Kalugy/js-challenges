import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeSelectorButtons() {
  const { themeSettings, updateTheme } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      {/* Light Theme Button */}
      <button
        onClick={() => updateTheme({ currentTheme: "light" })}
        className={`px-4 py-2 rounded text-sm font-medium transition ${
          themeSettings.currentTheme === "light"
            ? "bg-gray-200 text-gray-800 border border-gray-400"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        A
      </button>

      {/* Dark Theme Button */}
      <button
        onClick={() => updateTheme({ currentTheme: "dark" })}
        className={`px-4 py-2 rounded text-sm font-medium transition ${
          themeSettings.currentTheme === "dark"
            ? "bg-gray-800 text-white border border-gray-600"
            : "bg-gray-700 text-white hover:bg-gray-800"
        }`}
      >
        A
      </button>

      {/* Custom Theme Button */}
      <button
        onClick={() => updateTheme({ currentTheme: "custom" })}
        className={`px-4 py-2 rounded text-sm font-medium transition ${
          themeSettings.currentTheme === "custom"
            ? "bg-yellow-500 text-white border border-yellow-600"
            : "bg-yellow-400 text-white hover:bg-yellow-500"
        }`}
      >
        A
      </button>
    </div>
  );
}
