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
            <Link href="/LaunchToken" className="hover:text-indigo-200 transition-colors">
              Launch NFT
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

      <footer className="bg-gray-800 text-gray-300 py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    {/* Brand and Info */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">TokenPlay</h2>
      <p className="text-sm mb-4">
        Empowering gamers and developers with in-game currency, NFTs, and blockchain solutions.
      </p>
      <p>&copy; 2024 TokenPlay. All rights reserved.</p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul>
        <li>
          <a href="/about" className="hover:underline">About Us</a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">Contact</a>
        </li>
        <li>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-start space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-xl hover:text-white"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-xl hover:text-white"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-xl hover:text-white"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-xl hover:text-white"></i>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-400">Powered by Coinbase</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Layout;
