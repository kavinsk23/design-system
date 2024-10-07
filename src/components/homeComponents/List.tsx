"use client";
import React, {useState} from 'react';
import { AiOutlineCheckCircle, AiOutlineStar } from 'react-icons/ai';
import ViewCode from './viewCode/ViewCode';

export default function ListComponent() {

    const listCode = `<div className='flex gap-5'>
                {/* Ordered List */}
                <div className="border-2 border-black rounded-lg p-6 space-y-4">
                    <h3 className="text-purple-700 text-sm uppercase mb-4">Ordered List</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>First item in the list</li>
                    <li>Second item with more description text to see how it looks</li>
                    <li>Third item in the ordered list</li>
                    <li>Fourth item to end the list</li>
                    </ol>
                </div>

                {/* Unordered List */}
                <div className="border-2 border-black rounded-lg p-6 space-y-4">
                    <h3 className="text-purple-700 text-sm uppercase mb-4">Unordered List</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Item one</li>
                    <li>Item two with extra content for layout testing</li>
                    <li>Another item</li>
                    <li>Last item in the unordered list</li>
                    </ul>
                </div>

                {/* Custom Icon List */}
                <div className="border-2 border-black rounded-lg p-6 space-y-4">
                    <h3 className="text-purple-700 text-sm uppercase mb-4">Custom Icon List</h3>
                    <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">This is a feature that has been successfully implemented</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <AiOutlineStar className="w-6 h-6 text-yellow-500" />
                        <span className="text-gray-700">A special feature of our design system</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">Another successfully implemented feature</span>
                    </li>
                    </ul>
                </div>
            </div>`;

  return (
    <section className="p-4 md:p-6 flex flex-col lg:flex-row gap-10">
        {/* Title */}
        <div className="min-w-72">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Lists</h2>
        </div>
    <div className='w-full'>
        <div className='flex flex-col'>
            <div className='flex gap-5'>
                {/* Ordered List */}
                <div className="border-2 border-black rounded-lg p-6 space-y-4">
                    <h3 className="text-purple-700 text-sm uppercase mb-4">Ordered List</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>First item in the list</li>
                    <li>Second item with more description text to see how it looks</li>
                    <li>Third item in the ordered list</li>
                    <li>Fourth item to end the list</li>
                    </ol>
                </div>

                {/* Unordered List */}
                <div className="border-2 border-black rounded-lg p-6 space-y-4">
                    <h3 className="text-purple-700 text-sm uppercase mb-4">Unordered List</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Item one</li>
                    <li>Item two with extra content for layout testing</li>
                    <li>Another item</li>
                    <li>Last item in the unordered list</li>
                    </ul>
                </div>

                {/* Custom Icon List */}
                <div className="border-2 border-black rounded-lg p-6 space-y-4">
                    <h3 className="text-purple-700 text-sm uppercase mb-4">Custom Icon List</h3>
                    <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">This is a feature that has been successfully implemented</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <AiOutlineStar className="w-6 h-6 text-yellow-500" />
                        <span className="text-gray-700">A special feature of our design system</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-gray-700">Another successfully implemented feature</span>
                    </li>
                    </ul>
                </div>
            </div>
      </div>
      <div>
        <ViewCode code={listCode} />
      </div>
      </div>
    </section>
  );
}
