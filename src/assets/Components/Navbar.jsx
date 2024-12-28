import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ isSearchVisible, toggleSearch }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <nav className="navbar fixed z-10 h-14 w-full bg-white flex justify-center items-center px-16 py-4 text-lg font-GretaSemi">
      <div className="navbar-logo mr-12">
        <img
          src="https://static.dc.com/2024-08/dc-logo-313x313.svg"
          alt="DC Logo"
          className="logo w-10"
        />
      </div>
      <ul className="navbar-links flex gap-7">
        <li className="hover:text-blue transition all duration-300 cursor-pointer">
          CHARACTERS
        </li>
        <li
          className="relative flex gap-1 hover:text-blue transition all duration-300 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("COMICS")}
          onMouseLeave={handleMouseLeave}
        >
          <h2>COMICS</h2>{" "}
          <span className="text-sm items-center flex justify-center">▼</span>
          {hoveredMenu === "COMICS" && (
            <div className="HoveredMenu absolute top-6 pt-2">
              <div className=" border-b-white"></div>
              <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg text-sm">
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  LATEST COMICS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC GO!
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC UNIVERSE INFINITE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  TOP STORYLINES
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  SHOWCASE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COLLECTIONS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COMIC SHOP LOCATOR
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  PRINT SUBSCRIPTIONS
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative flex gap-1 hover:text-blue transition all duration-300 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("MOVIES & TV")}
          onMouseLeave={handleMouseLeave}
        >
          <h2>MOVIES & TV</h2>{" "}
          <span className="text-sm items-center flex justify-center">▼</span>
          {hoveredMenu === "MOVIES & TV" && (
            <div className="HoveredMenu absolute top-6">
              <div className=" border-b-white"></div>
              <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg text-sm">
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  LATEST COMICS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC GO!
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC UNIVERSE INFINITE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  TOP STORYLINES
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  SHOWCASE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COLLECTIONS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COMIC SHOP LOCATOR
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  PRINT SUBSCRIPTIONS
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:text-blue transition all duration-300 cursor-pointer">
          GAMES
        </li>
        <li className="hover:text-blue transition all duration-300 cursor-pointer">
          NEWS
        </li>
        <li className="hover:text-blue transition all duration-300 cursor-pointer">
          VIDEO
        </li>
        <li
          className="relative flex gap-1 hover:text-blue transition all duration-300 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("SHOP")}
          onMouseLeave={handleMouseLeave}
        >
          <h2>SHOP</h2>{" "}
          <span className="text-sm items-center flex justify-center">▼</span>
          {hoveredMenu === "SHOP" && (
            <div className="HoveredMenu absolute top-6">
              <div className=" border-b-white"></div>
              <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg text-sm">
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  LATEST COMICS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC GO!
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC UNIVERSE INFINITE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  TOP STORYLINES
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  SHOWCASE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COLLECTIONS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COMIC SHOP LOCATOR
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  PRINT SUBSCRIPTIONS
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:text-blue transition all duration-300 cursor-pointer">
          COMMUNITY
        </li>
        <li
          className="relative flex gap-1 hover:text-blue transition all duration-300 cursor-pointer"
          onMouseEnter={() => handleMouseEnter("MORE")}
          onMouseLeave={handleMouseLeave}
        >
          <h2>MORE</h2>{" "}
          <span className="text-sm items-center flex justify-center">▼</span>
          {hoveredMenu === "MORE" && (
            <div className="HoveredMenu absolute top-6">
              <div className=" border-b-white"></div>
              <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg text-sm">
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  LATEST COMICS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC GO!
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  DC UNIVERSE INFINITE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  TOP STORYLINES
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  SHOWCASE
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COLLECTIONS
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  COMIC SHOP LOCATOR
                </li>
                <li className="px-4 py-2 text-black hover:bg-gray-light cursor-pointer transition">
                  PRINT SUBSCRIPTIONS
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      <div className="navbar-right flex justify-between items-center gap-5">
        <input
          type="text"
          placeholder="Search:"
          className={`w-60 ml-8 px-4 py-1 rounded-full border border-gray transition-all duration-300 ${
            isSearchVisible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
        <div className="Search w-4 flex justify-center items-center">
          <button className="items-center" onClick={toggleSearch}>
            <CiSearch className="object-contain" />
          </button>
        </div>
        <button className="btn hover:text-blue">SIGN UP</button>
        <button className="btn hover:text-blue">LOG IN</button>
      </div>
    </nav>
  );
};

export default Navbar;
