import React from "react";
import { useTheme } from "./context/ThemeContext";
import { linkItems } from "./constants/generalContants";
import GitHubLink from "./assets/icons/gitHub";
import ThemeSelectorButtons from "./components/rehusables/themeSelectorButtons";
const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer 
      className="p-5 md:p-15"
      style={{
        backgroundColor: theme.secondaryBg,
      }}
    > 
      <div className=" w-100% flex flex-col gap-5 md:flex-row md:justify-around">
        {/* Left Side: Site Info and Theme Buttons */}
        <div className="mb-4 md:mb-0 ">
          <div className="flex flex-row gap-2">
            <h4 className="font-bold mb-2">Js Challenges</h4>
          </div>
          <p className="mb-4">
          Memorize first, then test with algorithms to gain better insights.
          </p>        
        </div>

        {/* Right Side: Quick Navigation */}
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="mb-4 md:mb-0 ">
            <h4 className=" font-bold mb-2">Navigation</h4>
            <ul className="  flex flex-col md:flex-row gap-2">
              {linkItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-8 text-center ">
        &copy; {new Date().getFullYear()} JS Challenges. Open source and open for contributions
        <GitHubLink
          url="https://github.com/Kalugy/js-challenges"
          size={16}
          className="pl-2"
        />
      </div>
    </footer>
  );
};

export default Footer;