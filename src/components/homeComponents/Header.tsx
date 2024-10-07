"use client";
import React from 'react';

export default function Header() {
  return (
    <header className="flex items-baseline justify-start p-4 md:p-6">
      <h1 className="text-4xl font-bold text-gray-900">OPEN</h1>
      <span className="ml-2 text-lg font-bold text-pink-500">Next Tailwind Framework</span>
    </header>
  );
}
