"use client";
import React from 'react';
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white p-6 md:p-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-between">
        {/* Company Information */}
        <div className="min-w-72">
          <h2 className="text-2xl font-bold mb-4">Design System</h2>
          <p className="text-gray-400 text-sm">
            Unified Framework for Scalable Interfaces. Bringing consistency and style across your applications.
          </p>
        </div>

        
        {/* Social Media Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/kavin-sashantha-b92714240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" className="hover:text-blue-700 transition-all">
              <AiOutlineLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/kavinsk23" aria-label="Github" className="hover:text-blue-400 transition-all">
              <AiOutlineGithub className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/kaveen.sashantha" aria-label="Facebook" className="hover:text-blue-500 transition-all">
              <AiOutlineFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/cheazze_buddy/" aria-label="Instagram" className="hover:text-pink-500 transition-all">
              <AiOutlineInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="text-center text-gray-500 text-sm mt-10">
      <p>
          © 2024 Design System by{' '}
          <a href="https://kavinsk.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-all">
            Kavin SK
          </a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
