'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import WalletComponent from './WalletComponent';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <header className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">TokenPlay</h1>
          </Link>
          
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="block lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/launchtoken" className="hover:text-indigo-200 transition-colors">
              Launch Token
            </Link>
            <WalletComponent />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-indigo-700">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/launchtoken"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                Launch Token
              </Link>
              <WalletComponent />
            </nav>
          </div>
        )}
      </header>

      <main className="w-full">{children}</main>

      <footer className="bg-gray-800 text-white py-8 px-4 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 TokenPlay. All rights reserved.</p>
          <p className="mt-2">Powered by Lisk</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
