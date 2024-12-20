import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from './context/ThemeContext';
import Footer from './Footer';

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div 
      className={`${theme.textSize} `}
      style={{
        backgroundColor: theme.background,
        color: theme.textColor,
        fontSize: theme.textSize
      }}
    >
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div className={`min-w-80 py-20 md:p-20 md:mt-15`}>
        <Outlet /> {/* Dynamic content goes here */}
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}