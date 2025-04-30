"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full px-4 py-4 flex items-center justify-between z-50">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          <span className="text-xl font-bold">Financio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 px-6 py-2 bg-white/50 backdrop-blur-sm rounded-full">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Company
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Pricing
          </a>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              Pages
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:block">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 pt-10 bg-white/80 backdrop-blur-sm shadow-md">
          <nav className="flex flex-col space-y-3 py-3">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Company
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
            <button className="flex items-center justify-between text-gray-700 hover:text-gray-900">
              Pages
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-full">
              Get started
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
