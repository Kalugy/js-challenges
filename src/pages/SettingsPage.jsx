// import Settings from "../components/settings/Settings";
import React, { useState } from "react";
import SettingsTheme from "../components/settings/SettingsTheme";
import { useTheme } from "../context/ThemeContext";
import Dropdown from "../components/rehusables/dropdown";
import SettingsShorcuts from "../components/settings/SettingsShorcuts";
export default function SettingsPage() {
  // State to manage the current theme
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen p-4 transition-all duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.textColor,
      }}
    >
      <h1 className={`font-bold text-3xl mb-4 ${theme.textSize}`}>
        Theme and Custom Settings
      </h1>
      <Dropdown title="Theme Settings">
        <SettingsTheme />
      </Dropdown>
      <Dropdown title="ShortCuts Settings">
        <SettingsShorcuts />
      </Dropdown>
    </div>
  );
}