"use client";
import React from 'react';

export default function Colors() {
  const colors = [
    {
      name: 'PINK',
      hex: '#F43EBB',
    },
    {
      name: 'PURPLE',
      hex: '#7048E8',
    },
    {
      name: 'BLUE',
      hex: '#51CF66',
    },
  ];

  const grays = [
    '#212429',
    '#495057',
    '#ACB5BD',
    '#DDE2E5',
    '#F8F9FA',
  ];

  return (
    <section className="block md:flex p-4 md:p-6">
      {/* Title and Description */}
      <div className="mb-8 w-96">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Colors</h2>
        <p className="text-md text-gray-500">Primaries and grays</p>
      </div>

        <div>
        {/* Primary Colors Swatches */}
        <div className="flex gap-10 flex-wrap mb-12">
            {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center">
                <div
                className="w-24 h-24 rounded-md mb-2"
                style={{ backgroundColor: color.hex }}
                />
                <p className="text-sm font-semibold text-gray-800">{color.name}</p>
                <p className="text-sm text-gray-500">{color.hex}</p>
            </div>
            ))}
        </div>

        {/* Grayscale Swatches */}
        <div className="flex items-center">
            {grays.map((gray) => (
            <div key={gray} className="flex flex-col items-center">
                <div
                className="w-16 sm:w-20 h-8 mb-2"
                style={{ backgroundColor: gray }}
                />
                <p className="text-sm text-gray-500">{gray}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}
