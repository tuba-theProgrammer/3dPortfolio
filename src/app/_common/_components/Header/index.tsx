'use client';

import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {

    setMenuOpen(!menuOpen);
  };

  const handleIconClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="mx-auto max-w-screen-2xl overflow-x-hidden">
        <div className="flex flex-col mx-0 lg:mx-16">
          <div className="shadow-sm ">
            <div className="flex flex-col flex-shrink-0 justify-center h-16 xlg:h-20 w-full">
              <div className="flex justify-between items-center px-6 lg-px-0">
                {/* Mobile Menu Icon */}
                <div className="block md:hidden flex items-start justify-start w-auto" onClick={toggleMenu}>
                  <svg
                    className="block md:hidden"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H17M3 6H21M3 18H21"
                      stroke="#F4EBFF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center md:justify-center sm:justify-center w-full md:w-auto">
                  <div onClick={handleIconClick} className="cursor-pointer">
                    <img
                      className="lg:h-10 w-13 h-8"
                      src={isMobile ? "assets/Logo/Logo wrap mobile.png" : "assets/Logo/Logo wrap.png"}
                      alt="Logo"
                    />
                  </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                <a
                    href="#home"
                    className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-white font-inter font-semibold leading-5 lg:leading-6"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-white font-inter font-semibold leading-5 lg:leading-6"
                  >
                    About
                  </a>
                  <a
                    href="#work"
                    className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-white font-inter font-semibold leading-5 lg:leading-6"
                  >
                    Work
                  </a>
                  <a
                    href="#contact"
                    className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-white font-inter font-semibold leading-5 lg:leading-6"
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile Join Button */}
                {isMobile && (
                  <div className="flex justify-center items-center rounded-lg">
                    <div className="flex items-start">
                      <div className="flex justify-center items-center text-white font-inter text-sm font-semibold leading-5">
                        Contact
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Links */}
            {menuOpen && (
              <div className="flex flex-col bg-black py-2 px-6">
                 <a href="#home" className="py-2 text-white font-inter font-semibold leading-6">
                  Home
                </a>
                <a href="#about" className="py-2 text-white font-inter font-semibold leading-6">
                  About
                </a>
                <a href="#work" className="py-2 text-white font-inter font-semibold leading-6">
                  Work
                </a>
              
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
