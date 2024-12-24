import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useTheme } from "./context/ThemeContext";
import { linkItems } from "./constants/generalContants";
import ThemeSelectorButtons from "./components/rehusables/themeSelectorButtons";
import HoverThemeButton from "./components/rehusables/hoverThemeButton";
import useScrollToTop from "./hooks/useScrollToTop";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const scrollToTop = useScrollToTop();

  const handleMenuClick = () => {
    console.log('click')
    setMobileMenuOpen(false); // Close the menu
    scrollToTop(); // Scroll to top
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 
        
      `}
      style={{
        backgroundColor: isScrolled ? theme.secondaryBg : "transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div>
          <div className="flex ml-5 align-middle items-center">
            <h1 className={`text-2xl font-bold ml-2 text-[${theme.textColor}]`}>
              Js challenges
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <HoverThemeButton/>
          {linkItems.map((item) =>
            item.isButton ? (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={`px-4 py-2 rounded transition button-${theme} text-[${theme.textColor}] hover:opacity-90`}
                //activeStyle={styles.activeLink}
                >
                {item.name}
              </NavLink>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={`font-semibold text-[${theme.textColor}]`}
                onClick={scrollToTop}
                //make hover 
              >
                {item.name}
              </NavLink>
            )
          )}
          
        </div>

        {/* Mobile Burger Button */}
        <button
          className={`md:hidden text-xl text-[${theme.textColor}]`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

{/* Mobile Menu */}
<div
  className={`fixed top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
    isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
  }`}
  style={{
    backgroundColor: theme.secondaryBg,
    transition: "transform 0.7s ease-in-out, background-color 0.7s ease-in-out",
  }}
>
<button
  onClick={handleMenuClick} // Ensure this function is properly passed
  className={`absolute top-4 right-6 text-3xl pointer`}
  style={{
    color: theme.textColor,
    zIndex: 10, // Ensure it's above other elements
  }}
>
  ✕
</button>

  <ul
    className={`flex flex-col items-center justify-center gap-6 h-full transition-transform duration-500 ease-in-out ${
      isMobileMenuOpen ? "translate-y-0" : "-translate-y-12"
    }`}
  >
    {linkItems.map((item) =>
      item.isButton ? (
        <></>
      ) : (
        <li key={item.name}>
          <NavLink
            to={item.href}
            onClick={handleMenuClick} // Close the menu on click
            className={`text-lg font-semibold transition-transform duration-300 ease-in-out`}
            style={{
              color: theme.textColor,
            }}
          >
            {item.name}
          </NavLink>
        </li>
      )
    )}
    <ThemeSelectorButtons />
  </ul>
</div>
    </nav>
  );
};


export default Navbar;