"use client";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <section className="p-4 md:p-6 flex flex-col lg:flex-row gap-10">
      {/* Original Navigation Bar */}
      {/* Header Title */}
      <div className="w-72">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Navigation</h2>
      </div>

      <div className='flex flex-col gap-5'>
        {/* Sticky Navigation Bar */}
        <section className="sticky top-0 p-4 md:p-6 flex justify-between items-center bg-gray-800 text-white z-50">
            <div className="min-w-96 text-2xl font-bold">
                <a href="#" aria-label="Home">
                    OPEN
                </a>
            </div>
            <ul className="hidden md:flex gap-6">
            {['Features', 'Pricing', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                <a href="#" className="text-md hover:text-gray-300 transition-all">
                    {link}
                </a>
                </li>
            ))}
            </ul>
            <button className="md:hidden" onClick={toggleDropdown} aria-label="Toggle menu">
            {isDropdownOpen ? <AiOutlineClose className="w-8 h-8 text-white" /> : <AiOutlineMenu className="w-8 h-8 text-white" />}
            </button>
            {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-800 shadow-lg rounded-lg p-4 mt-2 z-50 md:hidden">
                <ul className="flex flex-col gap-4 text-white">
                {['Features', 'Pricing', 'Blog', 'Contact'].map((link, index) => (
                    <li key={index}>
                    <a
                        href="#"
                        className="text-md hover:text-gray-300 transition-all"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            )}
        </section>

        {/* Navigation Bar with Dropdown Links */}
        <section className="p-4 md:p-6 flex flex-col gap-10 border-b border-gray-200 bg-white">
            <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-900">
                <a href="#" aria-label="Home">
                OPEN
                </a>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-6 items-center">
                <li className="relative group">
                <a href="#" className="text-md text-gray-700 hover:text-gray-900 transition-all">
                    Services
                </a>
                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="p-2">
                    {['Web Design', 'App Development', 'SEO'].map((sublink, index) => (
                        <li key={index}>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {sublink}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                </li>
                {['Portfolio', 'Team', 'Contact'].map((link, index) => (
                <li key={index}>
                    <a href="#" className="text-md text-gray-700 hover:text-gray-900 transition-all">
                    {link}
                    </a>
                </li>
                ))}
            </ul>
            <button className="md:hidden" onClick={toggleDropdown} aria-label="Toggle menu">
                {isDropdownOpen ? <AiOutlineClose className="w-8 h-8 text-gray-700" /> : <AiOutlineMenu className="w-8 h-8 text-gray-700" />}
            </button>
            {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg p-4 mt-2 z-50 md:hidden">
                <ul className="flex flex-col gap-4">
                    {['Services', 'Portfolio', 'Team', 'Contact'].map((link, index) => (
                    <li key={index}>
                        <a
                        href="#"
                        className="text-md text-gray-700 hover:text-gray-900 transition-all"
                        onClick={() => setIsDropdownOpen(false)}
                        >
                        {link}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </nav>
        </section>
      </div>
    </section>
  );
}
