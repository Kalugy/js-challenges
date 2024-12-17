import React, { createContext, useContext, useEffect, useState } from "react";

import { themes } from "../constants/generalContants";

// Create ThemeContext
const ThemeContext = createContext();

// Custom hook for using ThemeContext
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Load theme settings from localStorage or use defaults
  const savedTheme = JSON.parse(localStorage.getItem("themeSettings")) || {
    currentTheme: "light",
    customSettings: themes.custom,
  };

  const [themeSettings, setThemeSettings] = useState(savedTheme);

  // Save to localStorage whenever themeSettings changes
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeSettings));
  }, [themeSettings]);

  // Resolve the actual theme based on currentTheme
  const resolvedTheme =
    themeSettings.currentTheme === "custom"
      ? themeSettings.customSettings
      : themes[themeSettings.currentTheme];

  // Update theme settings
  const updateTheme = (updates) => {
    setThemeSettings((prev) => ({ ...prev, ...updates }));
  };

  return (
    <ThemeContext.Provider
      value={{ theme: resolvedTheme, themeSettings, updateTheme, themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
