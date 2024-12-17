import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";

export default function ThemeSwitcherButton() {
  const { themeSettings, updateTheme, theme } = useTheme();

  // Get the appropriate icon based on the current theme
  const getIcon = () => {
    switch (themeSettings.currentTheme) {
      case "light":
        return <FaSun size={16} />;
      case "dark":
        return <FaMoon size={16} />;
      case "custom":
        return <FaPalette size={16} />;
      default:
        return <FaSun size={16} />;
    }
  };

  // Cycle through themes
  const handleThemeChange = () => {
    const nextTheme =
      themeSettings.currentTheme === "light"
        ? "dark"
        : themeSettings.currentTheme === "dark"
        ? "custom"
        : "light";

    updateTheme({ currentTheme: nextTheme });
  };

  return (
      <button
        onClick={handleThemeChange}
        className="flex items-center justify-center p-3 rounded-full  transition"
        style={{
          backgroundColor: theme.secondaryBg,
          color: theme.textColor
        }}
      >
        {getIcon()} {/* Dynamic Theme Icon */}
      </button>
  );
}
