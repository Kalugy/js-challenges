import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsTheme() {
  const { themeSettings, updateTheme, theme } = useTheme();

  const handleCustomChange = (key, value) => {
    updateTheme({
      customSettings: { ...themeSettings.customSettings, [key]: value },
    });
  };

  const colorFields = [
    { key: "background", label: "Background Color" },
    { key: "secondaryBg", label: "Secondary Background Color" },
    { key: "textColor", label: "Text Color" },
    { key: "btnColor", label: "Button Color" },
    { key: "btnDangerColor", label: "Danger Button Color" },
    { key: "btnAlertColor", label: "Alert Button Color" },
  ];

  return (
    <div 
      className={`p-4 border rounded-md`}
      style={{
        backgroundColor: theme.secondaryBg,
        color: theme.textColor
      }}
    >

      {/* Theme Selection */}
      <div className="mb-4">
        <label className="font-medium block mb-1">Select Theme</label>
        <select
          value={themeSettings.currentTheme}
          onChange={(e) => updateTheme({ currentTheme: e.target.value })}
          className="w-full p-2 border rounded "
          style={{
            backgroundColor: theme.background
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Custom Settings (only for custom theme) */}
      {themeSettings.currentTheme === "custom" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colorFields.map((field) => (
              <div key={field.key} className="mb-4">
                <label className="font-medium block mb-1">{field.label}</label>
                <input
                  type="color"
                  value={themeSettings.customSettings[field.key]}
                  onChange={(e) => handleCustomChange(field.key, e.target.value)}
                  className="w-full h-10 border rounded cursor-pointer"
                />
              </div>
            ))}
          </div>
{/* Text Size */}
<div className="mb-4">
            <label className="font-medium block mb-1">Text Size</label>
            <select
              value={themeSettings.currentTheme.textSize}
              onChange={(e) => handleCustomChange("textSize", e.target.value)}
              className="w-full p-2 border rounded"
              style={{
                backgroundColor: theme.background
              }}
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
