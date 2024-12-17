import React, { createContext, useContext, useEffect, useState } from "react";

// Default theme values
const themes = {
  light: { 
    background: "#ffffff", 
    textColor: "#000000",
    navbarBg: "#111111",
    secondaryBg: "#a01c1c"
  },
  dark: { 
    background: "#000000", 
    textColor: "#ffffff",
    navbarBg: "#111111",
    secondaryBg: "#a01c1c"
  },
  custom: { 
    background: "#f0f0f0", 
    textColor: "#333333",
    navbarBg: "#111111",
    secondaryBg: "#a01c1c"
  },
};

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
