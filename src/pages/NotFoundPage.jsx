import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
const NotFoundPage = () => {
  const { theme } = useTheme();
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen "
      style={{
        backgroundColor: theme.background,
        color: theme.textColor,
      }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-2 rounded-lg shadow transition duration-300"
        style={{
          backgroundColor: theme.btnColor,
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
