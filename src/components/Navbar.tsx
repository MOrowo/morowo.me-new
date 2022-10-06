import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const active =
    'py-4 px-2 text-deepblue border-b-4 border-deepblue font-semibold';
  const inactive =
    'py-4 px-2 text-gray-500 font-semibold hover:text-deepblue transition duration-300';

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
                <Link href="/">
                  <a
                    id="index"
                    className={router.pathname == '/' ? active : inactive}
                  >
                    Home
                  </a>
                </Link>
                {/* <Link href="/" scroll={false}>
                  <a className={inactive} onClick={scrollToAbout}>
                    About
                  </a>
                </Link> */}
                <Link href="/projects">
                  <a
                    id="projects"
                    className={
                      router.pathname == '/projects' ? active : inactive
                    }
                  >
                    Projects
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    id="contact"
                    className={
                      router.pathname == '/contact' ? active : inactive
                    }
                  >
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-deepblue "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
