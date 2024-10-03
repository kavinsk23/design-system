"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Reference for the dropdown button and menu
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-3 md:p-4 bg-[#111111] shadow-md">
      {/* Center-aligned Title */}
      <div className="flex-1 text-left md:text-center">
        <h1 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">
          Unified Design System for Scalable Interfaces
        </h1>
      </div>

      {/* Dropdown Menu in the Right Corner */}
      <div ref={dropdownRef} className="relative ml-auto">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 md:px-6 md:py-3 bg-gray-200 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-300 transition-all"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          Navigate
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <ul className="py-2">
              {/* Dropdown Navigation Links */}
              {["Colors", "Typography", "Buttons", "Forms", "Alerts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    className="block px-4 py-2 md:px-5 md:py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
