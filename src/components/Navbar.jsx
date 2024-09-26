import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-yellow-400 overflow-x-hidden">
      <div className="flex justify-between items-center px-5 py-3">
        {/* Logo or Title */}
        <div className="text-xl font-bold">My Store</div>

        {/* Menu button for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`lg:flex lg:items-center lg:gap-10 lg:p-0 font-bold ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>ALL CATEGORIES</li>
          </a>
          <a href="#" className="font-normal text-yellow-600 hover:text-gray-700 block py-2 lg:inline">
            <li>TODAY DEALS</li>
          </a>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>ELECTRONICS</li>
          </a>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>CLOTHINGS</li>
          </a>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>COMPUTERS</li>
          </a>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>FURNITURES</li>
          </a>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>MOM & BABY</li>
          </a>
          <a href="#" className="hover:text-gray-700 block py-2 lg:inline">
            <li>BOOKS & MORE</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
