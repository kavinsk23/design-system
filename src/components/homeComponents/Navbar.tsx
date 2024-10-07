"use client";
import React from 'react';

export default function Navbar() {

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
