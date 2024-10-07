"use client";
import React, { useState } from 'react';
import ViewCode from './viewCode/ViewCode';

export default function Forms() {
  const [selectedOption, setSelectedOption] = useState('');
  const [checked, setChecked] = useState(true);
  const [toggle, setToggle] = useState(false);
  const formCode = `
<div className="border-2 border-black rounded-lg p-6 mb-10 space-y-4">
  <h3 className="text-black-700 text-sm uppercase mb-4">Input</h3>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <input
        type="text"
        placeholder="Placeholder"
        className="w-full px-4 py-2 border rounded-md text-gray-700"
      />
    </div>
    <div>
      <input
        type="text"
        value="Filled Input"
        className="w-full px-4 py-2 border rounded-md text-gray-700"
        readOnly
      />
    </div>
    <div className="relative flex items-center">
      <input
        type="text"
        value="Success"
        className="w-full px-4 py-2 border border-green-500 rounded-md text-gray-700"
        readOnly
      />
      <span className="text-green-500 absolute right-4">&#10003;</span>
    </div>
    <div className="relative flex items-center">
      <input
        type="text"
        value="Error"
        className="w-full px-4 py-2 border border-red-500 rounded-md text-gray-700"
        readOnly
      />
      <span className="text-red-500 absolute right-4">&#9888;</span>
    </div>
  </div>
</div>

{/* Dropdown Section */}
<div className="border-2 border-black rounded-lg p-6 mb-10 space-y-4">
  <h3 className="text-purple-700 text-sm uppercase mb-4">Dropdown</h3>
  <select
    className="w-full px-4 py-2 border rounded-md text-gray-700"
    value={selectedOption}
    onChange={(e) => setSelectedOption(e.target.value)}
  >
    <option value="" disabled>Dropdown</option>
    <option value="Option1">Option 1</option>
    <option value="Option2">Option 2</option>
    <option value="Option3">Option 3</option>
  </select>
</div>
`;


  return (
    <section className="p-4 md:p-6 flex flex-col lg:flex-row gap-10">
      {/* Title */}
      <div className="w-96">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Forms</h2>
      </div>
    <div className='w-full'>
      <div>
        {/* Inputs Section */}
        <div className="w-96 border-2 border-black rounded-lg p-6 mb-10 space-y-4">
            <h3 className="text-black-700 text-sm uppercase mb-4">Input</h3>
            <div className="grid grid-cols-2 gap-4">
            <div>
                <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                />
            </div>
            <div>
                <input
                type="text"
                value="Filled Input"
                className="w-full px-4 py-2 border rounded-md text-gray-700"
                readOnly
                />
            </div>
            <div className="relative flex items-center">
                <input
                type="text"
                value="Success"
                className="w-full px-4 py-2 border border-green-500 rounded-md text-gray-700"
                readOnly
                />
                <span className="text-green-500 absolute right-4">&#10003;</span>
            </div>
            <div className="relative flex items-center">
                <input
                type="text"
                value="Error"
                className="w-full px-4 py-2 border border-red-500 rounded-md text-gray-700"
                readOnly
                />
                <span className="text-red-500 absolute right-4">&#9888;</span>
            </div>
            </div>
        </div>

        {/* Dropdown Section */}
        <div className="w-96 border-2 border-black rounded-lg p-6 mb-10 space-y-4">
            <h3 className="text-purple-700 text-sm uppercase mb-4">Dropdown</h3>
            <select
            className="w-full px-4 py-2 border rounded-md text-gray-700"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            >
            <option value="" disabled>
                Dropdown
            </option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
            </select>
        </div>

        {/* Checkbox, Select Button, and Toggle Button Section */}
        <div className="flex gap-8">
            {/* Checkbox */}
            <div className="border-2 border-black rounded-lg p-6 space-y-4">
            <h3 className="text-purple-700 text-sm uppercase mb-4">Checkbox</h3>
            <div className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" /> <span>Default</span>
            </div>
            <div className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" checked={checked} readOnly /> <span>Checked</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
                <input type="checkbox" className="form-checkbox" disabled /> <span>Disabled</span>
            </div>
            </div>

            {/* Select Button */}
            <div className="border-2 border-black rounded-lg p-6 space-y-4">
            <h3 className="text-purple-700 text-sm uppercase mb-4">Select Button</h3>
            <button className="px-4 py-2 border rounded-md">Default</button>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md">Selected</button>
            <button className="px-4 py-2 border rounded-md text-gray-400" disabled>
                Disabled
            </button>
            </div>

            {/* Toggle Button */}
            <div className="border-2 border-black rounded-lg p-6 space-y-4">
            <h3 className="text-purple-700 text-sm uppercase mb-4">Toggle Button</h3>
            <div
                className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${toggle ? 'bg-pink-500' : 'bg-gray-300'}`}
                onClick={() => setToggle(!toggle)}
            >
                <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                    toggle ? 'translate-x-8' : ''
                }`}
                />
            </div>
            <div className="w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-not-allowed">
                <div className="bg-white w-6 h-6 rounded-full shadow-md" />
            </div>
            </div>
        </div>
      </div>
      <div className='w-full'>
        <ViewCode code={formCode} />
      </div>
    </div>
    </section>
  );
}
