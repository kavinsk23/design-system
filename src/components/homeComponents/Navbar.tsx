"use client";
import Link from 'next/link';
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
          Unified Framework for Scalable Interfaces
        </h1>
      </div>
    </nav>
  );
}
