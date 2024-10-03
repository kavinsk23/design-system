"use client";
import React from 'react';

export default function Typography() {
  return (
    <section className="p-4 md:p-6 flex flex-col md:flex-row gap-10">
      {/* Typography Section Title and Description */}
      <div className="flex flex-col min-w-96">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Typography</h2>
        <p className="text-md text-gray-500 mb-4">Roboto set with the perfect-fourth modular type scale</p>
      </div>

      {/* Typography Samples */}
      <div className="flex flex-col space-y-6 w-full md:w-2/3">
        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">H1</span>
          <h1 className="text-5xl font-bold text-gray-900">Hayes Valley Studio</h1>
        </div>

        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">H2</span>
          <h2 className="text-4xl font-bold text-gray-900">Hayes Valley Studio</h2>
        </div>

        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">H3</span>
          <h3 className="text-3xl font-medium text-gray-900">Hayes Valley Studio</h3>
        </div>

        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">H4</span>
          <h4 className="text-2xl font-medium text-gray-900">Hayes Valley Studio</h4>
        </div>

        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">H5</span>
          <h5 className="text-xl font-bold uppercase text-gray-900">Hayes Valley Studio</h5>
        </div>

        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">P</span>
          <p className="text-lg text-gray-900">Hayes Valley Studio</p>
        </div>

        <div className="flex items-baseline space-x-4">
          <span className="text-sm text-gray-500 w-12">SMALL</span>
          <small className="text-sm text-gray-900">Hayes Valley Studio</small>
        </div>
      </div>
    </section>
  );
}
