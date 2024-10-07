"use client";
import React, { useState } from 'react';
import { AiOutlineCode } from 'react-icons/ai';

interface ViewCodeProps {
  code: string; // Accepts the code to display as a prop
}

const ViewCode: React.FC<ViewCodeProps> = ({ code }) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  // Function to toggle code visibility
  const toggleCodeVisibility = () => {
    setIsCodeVisible((prevState) => !prevState);
  };

  return (
    <div className="mt-4 w-full">
      {/* Toggle Button */}
      <button
        className={`flex items-center justify-center px-4 py-2 rounded-md border border-gray-400 transition-all ${
          isCodeVisible
            ? 'bg-red-700 text-white hover:bg-red-800'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        } shadow-md hover:shadow-lg`}
        onClick={toggleCodeVisibility}
        aria-label="Toggle code visibility"
      >
        <AiOutlineCode className="w-6 h-6 mr-2" />
        {isCodeVisible ? 'Hide Code' : 'View Code'}
      </button>

      {/* Code Textarea */}
      {isCodeVisible && (
        <textarea
          className="w-full mt-4 p-4 border rounded-md text-sm bg-gray-100"
          rows={15}
          readOnly
          value={code}
        />
      )}
    </div>
  );
};

export default ViewCode;
