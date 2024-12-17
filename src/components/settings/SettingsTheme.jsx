import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsTheme() {
  const { themeSettings, updateTheme, theme } = useTheme();

  const handleCustomChange = (key, value) => {
    updateTheme({
      customSettings: { ...themeSettings.customSettings, [key]: value },
    });
  };

  return (
    <div className={`p-4 border rounded-md text-[${theme.textColor}] bg-[${theme.background}]`}>
      <h2 className="text-xl font-semibold mb-4">Customization Settings</h2>

      {/* Theme Selection */}
      <div className="mb-4">
        <label className="font-medium block mb-1">Select Theme</label>
        <select
          value={themeSettings.currentTheme}
          onChange={(e) => updateTheme({ currentTheme: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Custom Settings (only for custom theme) */}
      {themeSettings.currentTheme === "custom" && (
        <>
          {/* Background Color */}
          <div className="mb-4">
            <label className="font-medium block mb-1">Background Color</label>
            <input
              type="color"
              value={themeSettings.customSettings.background}
              onChange={(e) => handleCustomChange("background", e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-medium block mb-1">Secondary bg Color</label>
            <input
              type="color"
              value={themeSettings.customSettings.secondaryBg}
              onChange={(e) => handleCustomChange("secondaryBg", e.target.value)}
              className="w-full"
            />
          </div>

          {/* Text Color */}
          <div className="mb-4">
            <label className="font-medium block mb-1">Text Color</label>
            <input
              type="color"
              value={themeSettings.customSettings.textColor}
              onChange={(e) => handleCustomChange("textColor", e.target.value)}
              className="w-full"
            />
          </div>

          {/* Text Size */}
          <div className="mb-4">
            <label className="font-medium block mb-1">Text Size</label>
            <select
              value={themeSettings.customSettings.textSize}
              onChange={(e) => handleCustomChange("textSize", e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="text-sm">Small</option>
              <option value="text-base">Normal</option>
              <option value="text-lg">Large</option>
              <option value="text-xl">Extra Large</option>
              <option value="text-2xl">2x Large</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}
