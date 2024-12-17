import React from "react";
import { useTheme } from "../../context/ThemeContext";

const GitHubLink = ({ url, text = "", size = 24, className="" }) => {
  const { theme } = useTheme()
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} inline-flex items-center gap-2 ${theme.background} hover:text-gray-900 transition`}
    >
      {/* GitHub Logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={size}
        height={size}
        className="inline-block"
      >
        <path
          fillRule="evenodd"
          d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.609-4.042-1.609-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.666-.304-5.467-1.333-5.467-5.93 0-1.311.469-2.382 1.237-3.221-.124-.303-.536-1.526.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.004-.404c1.02.005 2.047.138 3.004.404 2.293-1.553 3.299-1.23 3.299-1.23.653 1.65.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.803 5.624-5.476 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.899-.015 3.293 0 .319.192.694.799.576C20.565 21.796 24 17.299 24 12c0-6.628-5.372-12-12-12Z"
          clipRule="evenodd"
        />
      </svg>

      {/* Link Text */}
      <span>{text}</span>
    </a>
  );
};

export default GitHubLink;
