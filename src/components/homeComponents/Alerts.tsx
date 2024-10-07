"use client";
import React from 'react';
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineWarning, AiOutlineExclamationCircle } from 'react-icons/ai';
import ViewCode from './viewCode/ViewCode';

export default function Alerts() {
  const alertTypes = [
    {
      type: 'Error',
      icon: <AiOutlineWarning className="text-red-500 w-6 h-6" />,
      message: 'Error: Error Message',
      bgColor: 'bg-red-100',
      textColor: 'text-red-700',
    },
    {
      type: 'Success',
      icon: <AiOutlineCheckCircle className="text-green-500 w-6 h-6" />,
      message: 'Success: Success Message',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
    },
    {
      type: 'Notification',
      icon: <AiOutlineExclamationCircle className="text-orange-500 w-6 h-6" />,
      message: 'Notification: Notification Message',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-700',
    },
  ];

  const alertCode = `
  {/* Title */}
  <div className="w-72">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Alerts</h2>
  </div>

  {/* Alerts Section */}
  <div className="border-2 border-black rounded-lg p-6 space-y-4">
    <h3 className="text-purple-700 text-sm uppercase mb-4">Alert</h3>

    {/* Error Alert */}
    <div className="flex items-center gap-4 bg-red-100 p-4 rounded-md">
      {/* Icon */}
      <div>
        <AiOutlineWarning className="text-red-500 w-6 h-6" />
      </div>
      {/* Message */}
      <p className="flex-1 font-medium text-red-700">Error: Error Message</p>
      {/* Close Button */}
      <button className="text-gray-500 hover:text-gray-700">
        <AiOutlineClose className="w-5 h-5" />
      </button>
    </div>

    {/* Success Alert */}
    <div className="flex items-center gap-4 bg-green-100 p-4 rounded-md">
      {/* Icon */}
      <div>
        <AiOutlineCheckCircle className="text-green-500 w-6 h-6" />
      </div>
      {/* Message */}
      <p className="flex-1 font-medium text-green-700">Success: Success Message</p>
      {/* Close Button */}
      <button className="text-gray-500 hover:text-gray-700">
        <AiOutlineClose className="w-5 h-5" />
      </button>
    </div>

    {/* Notification Alert */}
    <div className="flex items-center gap-4 bg-orange-100 p-4 rounded-md">
      {/* Icon */}
      <div>
        <AiOutlineExclamationCircle className="text-orange-500 w-6 h-6" />
      </div>
      {/* Message */}
      <p className="flex-1 font-medium text-orange-700">Notification: Notification Message</p>
      {/* Close Button */}
      <button className="text-gray-500 hover:text-gray-700">
        <AiOutlineClose className="w-5 h-5" />
      </button>
    </div>
  </div>
`;


  return (
    <section className="p-4 md:p-6 flex flex-col lg:flex-row gap-10">
        {/* Title */}
          <div className="w-96">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Alerts</h2>
          </div>

        <div className='w-full'>
          {/* Alerts Section */}
          <div className="w-full border-2 border-black rounded-lg p-6 space-y-4">
            <h3 className="text-purple-700 text-sm uppercase mb-4">Alert</h3>
            {alertTypes.map((alert, index) => (
              <div key={index} className={`flex items-center gap-4 ${alert.bgColor} p-4 rounded-md`}>
                {/* Icon */}
                <div>{alert.icon}</div>
                {/* Message */}
                <p className={`flex-1 font-medium ${alert.textColor}`}>{alert.message}</p>
                {/* Close Button */}
                <button className="text-gray-500 hover:text-gray-700">
                  <AiOutlineClose className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        <div className='w-full'>
          <ViewCode code={alertCode} />
        </div>
      </div>
    </section>
  );
}
