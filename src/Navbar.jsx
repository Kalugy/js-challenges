import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Challenge", href: "/challenge" },
    { name: "Custom", href: "/custom" },

    // { name: "Start", href: "#start", isButton: true },
  ];

  const theme = 'default'
  const themeStyles = {
    default: {
      navbarBg: "bg-gray-200",
      navbarText: "text-defaultText",
      mobileBg: "bg-defaultBg",
      hover: "hover:text-defaultHoverBg"
    },
    dark: {
      navbarBg: "bg-darkCustomBg",
      navbarText: "text-darkText",
      mobileBg: "bg-darkBg",
      hover: "hover:text-darkHoverBg"
    },
    blue: {
      navbarBg: "bg-blueCustomBg",
      navbarText: "text-blueText",
      mobileBg: "bg-blueBg",
      hover: "hover:text-blueHoverBg"
    },
    green: {
      navbarBg: "bg-greenCustomBg",
      navbarText: "text-greenText",
      mobileBg: "bg-greenBg",
      hover: "hover:text-greenHoverBg"
    },
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(false); // Close the menu
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
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? themeStyles[theme].navbarBg: "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div>
          <div className="flex ml-5 align-middle items-center">
            <h1 className={`text-2xl font-bold ml-2 ${themeStyles[theme].navbarText}`}>
              Js challenges
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) =>
            item.isButton ? (
              <NavLink 
                key={item.name} 
                to={item.href} 
                className={`px-4 py-2 rounded transition button-${theme} ${themeStyles[theme].navbarText} hover:opacity-90`}
                //activeStyle={styles.activeLink}
                >
                {item.name}
              </NavLink>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                className={`font-semibold ${themeStyles[theme].navbarText} ${themeStyles[theme].hover}`}
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Burger Button */}
        <button
          className={`md:hidden text-xl ${themeStyles[theme].navbarText}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed overflow-y-hidden top-0 left-0 w-full h-full transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } ${themeStyles[theme].navbarBg} ${themeStyles[theme].navbarText}`}
      >
        <BackgroundCircle />
          
        <button
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute top-4 right-6 text-3xl ${themeStyles[theme].navbarText}`}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center justify-center gap-6 h-full">
          {menuItems.map((item) =>
            item.isButton ? (
              <></>
              // <li key={item.name}>
              //   <a
              //     href={item.href}
              //     onClick={handleMenuClick} // Close the menu on click
              //     className={`px-6 py-3 rounded transition button-${theme} ${themeStyles[theme].navbarText} hover:opacity-90`}
              //   >
              //     {item.name}
              //   </a>
              // </li>
            ) : (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  onClick={handleMenuClick} // Close the menu on click
                  className={`text-lg font-semibold ${themeStyles[theme].navbarText} transition ${themeStyles[theme].hover}`}
                >
                  {item.name}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

const BackgroundCircle = () => {
  return (
    <div
      className="absolute top-5 left-5 w-12 h-12 bg-cover rotate-12 bg-center"
      style={{
        backgroundImage: "url('/images/newLogo.png')", // Replace with your image path
      }}
    ></div>
  );
};

export default Navbar;