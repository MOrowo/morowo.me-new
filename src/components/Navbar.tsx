import React from 'react';
import { useState, useEffect } from 'react';
import { scrollToAbout } from './Nav/default';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useEffect(() => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [isOpen]);

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="flex items-center justify-center">
          <div className="flex justify-between">
            <div className="flex space-x-14">
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-20">
                <a
                  href=""
                  className="py-4 px-2 text-deepblue border-b-4 border-deepblue font-semibold "
                >
                  Home
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-deepblue transition duration-300"
                  onClick={scrollToAbout}
                >
                  About
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-deepblue transition duration-300"
                >
                  Projects
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-deepblue transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-deepblue "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        {/* Remove hidden if view via mobile */}
        <div id="mobile-menu" className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-deepblue font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-deepblue transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-deepblue transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-deepblue transition duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
