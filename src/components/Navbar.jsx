/* eslint-disable */
import React from "react";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#services", label: "Services" },
  { path: "#portfolio", label: "Portfolio" },
  { path: "#team", label: "Team" },
  { path: "#blog", label: "Blog" },
  { path: "#contact", label: "Contact" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-10 fixed top-0 w-full flex flex-wrap justify-between items-center lg:px-16  bg-main text-[#ffffff99] font-700 h-20">
      {/* Logo */}
      <a
        href="#home"
        aria-label="Home"
        className={` ${isMenuOpen && "hidden"}`}
      >
        <h1 className="text-logo text-main font-main px-6">
          Impact
          <span className="text-second rounded-[50%]">.</span>
        </h1>
      </a>

      {/* Toggle Menu Button */}
      <div className="pr-3">
        <button
          label="Toggle Menu"
          onClick={toggleMenu}
          type="button"
          className={`lg:hidden focus:ring-2 focus:ring-gray-200 p-2 rounded-lg ${
            isMenuOpen && "hidden"
          }`}
        >
          <RxHamburgerMenu size={25} />
        </button>

        {/* Close Menu Button */}
        <button
          label="Close Menu"
          onClick={toggleMenu}
          type="button"
          className={`lg:hidden focus:ring-2 focus:ring-gray-200 p-2 rounded-lg absolute top-0 right-0 mt-6 mr-3 ${
            !isMenuOpen && "hidden"
          }`}
        >
          <CgClose size={25} />
        </button>
      </div>

      {/* Menu List */}
      <div className={`${!isMenuOpen && "hidden"} w-full lg:w-auto lg:block`}>
        <ul className="bg-main lg:space-x-10 lg:bg-transparent rounded-lg md:py-4 pt-14 flex flex-col lg:flex-row text-p md:font-700 w-full px-6">
          {ROUTES.map(({ path, label }, i) => (
            <li
              className={`lg:hover:bg-transparent hover:text-second py-2  cursor-pointer rounded bg-main ${
                i === 0
                  ? " lg:bg-transparent text-[#ffffff99]"
                  : "hover:text-main"
              }`}
              key={path}
            >
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
