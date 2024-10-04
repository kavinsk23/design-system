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
    <div className="mt-4">
      {/* Toggle Button */}
      <button
        className="text-gray-700 hover:text-gray-900 transition-all flex items-center"
        onClick={toggleCodeVisibility}
        aria-label="Toggle code visibility"
      >
        <AiOutlineCode className="w-6 h-6 mr-1" />
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
