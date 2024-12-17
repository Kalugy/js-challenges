import React, { useState } from "react";

export default function Settings() {
  // Initial shortcut settings
  const [shortcuts, setShortcuts] = useState({
    previousChallenge: "Ctrl + ArrowLeft",
    nextChallenge: "Ctrl + ArrowRight",
    submit: "Ctrl + Enter",
    run: "Shift + Enter",
  });

  // Handle user input change for shortcuts
  const handleInputChange = (key, value) => {
    setShortcuts((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shortcut Settings</h2>

      {/* Shortcuts List */}
      <div className="space-y-4">
        {/* Previous Challenge */}
        <ShortcutRow
          label="Previous Challenge"
          value={shortcuts.previousChallenge}
          onInputChange={(value) => handleInputChange("previousChallenge", value)}
        />

        {/* Next Challenge */}
        <ShortcutRow
          label="Next Challenge"
          value={shortcuts.nextChallenge}
          onInputChange={(value) => handleInputChange("nextChallenge", value)}
        />

        {/* Submit */}
        <ShortcutRow
          label="Submit"
          value={shortcuts.submit}
          onInputChange={(value) => handleInputChange("submit", value)}
        />

        {/* Run */}
        <ShortcutRow
          label="Run"
          value={shortcuts.run}
          onInputChange={(value) => handleInputChange("run", value)}
        />
      </div>
    </div>
  );
}

// A reusable component for each shortcut row
function ShortcutRow({ label, value, onInputChange }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-gray-700">{label}</p>
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
