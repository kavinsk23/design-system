"use client";
import React from 'react';

export default function Buttons() {
  const buttonVariants = [
    {
      type: 'Primary',
      colors: ['bg-pink-500', 'bg-pink-600', 'bg-pink-300'],
      textColor: 'text-white',
    },
    {
      type: 'Alternative',
      colors: ['bg-purple-600', 'bg-purple-700', 'bg-purple-300'],
      textColor: 'text-white',
    },
    {
      type: 'Secondary',
      colors: ['border border-gray-900 text-gray-900', 'border border-gray-900 text-gray-900', 'border border-gray-200 text-gray-400'],
      isSecondary: true,
    },
  ];

  return (
    <section className="p-4 md:p-6 flex flex-col lg:flex-row gap-10">
      {/* Title and Button Variants */}
      <div className="w-72">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Buttons</h2>
      </div>

      <div className="w-96">
        {/* Labels for Button Groups */}
        <div className="flex justify-between mb-4">
          {buttonVariants.map((variant) => (
            <span key={variant.type} className="text-gray-500 text-sm uppercase">{variant.type}</span>
          ))}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {buttonVariants.map((variant) =>
            variant.colors.map((color, index) => (
              <button
                key={`${variant.type}-${index}`}
                className={`w-full py-3 rounded-md font-medium ${variant.isSecondary ? '' : variant.textColor} ${color} ${variant.isSecondary ? 'hover:bg-gray-100 transition-all' : ''}`}
              >
                Label
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
