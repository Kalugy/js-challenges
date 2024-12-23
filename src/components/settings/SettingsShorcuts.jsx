import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { shortcutsConstant } from "../../constants/generalContants";

export default function SettingsShorcuts() {
  const { theme } = useTheme()
  // Initial shortcut settings
  // const [shortcuts, setShortcuts] = useState({
  //   previousChallenge: shortcutsConstant.previousChallenge,
  //   nextChallenge: shortcutsConstant.nextChallenge,
  //   submit: shortcutsConstant.submit,
  //   hint: shortcutsConstant.hint
  // });
  const [shortcuts, setShortcuts] = useState(() => {
    return Object.fromEntries(
      Object.keys(shortcutsConstant).map((key) => [key, shortcutsConstant[key]])
    );
  });

  // Handle user input change for shortcuts
  const handleInputChange = (key, value) => {
    setShortcuts((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div 
      className="max-w-2xl p-4 border rounded-md shadow-md"
      style={{
        backgroundColor: theme.secondaryBg,
        color: theme.textColor
      }}
    >
      <h2 className="text-2xl font-semibold mb-2">Challenges</h2>

      {/* Shortcuts List */}
      <div className="space-y-4">
        {Object.entries(shortcuts).map(([key, value]) => (
          <ShortcutRow
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            value={value}
            onInputChange={(newValue) => handleInputChange(key, newValue)}
          />
        ))}
  
      </div>
    </div>
  );
}

// A reusable component for each shortcut row
function ShortcutRow({ label, value, onInputChange }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold ">{label}</p>
      </div>
      {/* Input for defining a custom shortcut */}
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter shortcut (e.g., Ctrl + A)"
        disabled={true}
        className="w-48 p-2 border rounded focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
