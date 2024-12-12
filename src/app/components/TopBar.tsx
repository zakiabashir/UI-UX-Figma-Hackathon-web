'use client';

import { FaEnvelope, FaPhoneAlt, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (languageRef.current && !languageRef.current.contains(target)) {
        setLanguageDropdown(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(target)) {
        setCurrencyDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: 'language' | 'currency') => {
    if (dropdown === 'language') {
      setLanguageDropdown(!languageDropdown);
      setCurrencyDropdown(false); // Close the other dropdown
    } else if (dropdown === 'currency') {
      setCurrencyDropdown(!currencyDropdown);
      setLanguageDropdown(false); // Close the other dropdown
    }
  };

  return (
    <div className="w-full bg-violet-700 text-white py-2 text-sm flex items-center justify-center">
      {/* TopBar Container */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center justify-center gap-4 mb-2 sm:mb-0">
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span>mhhasanul@gmail.com</span>
          </a>
          <a
            href="tel:1234567890"
            className="whitespace-nowrap flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-4">
          {/* Language Selector */}
          <div className="relative" ref={languageRef}>
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => toggleDropdown('language')}
            >
              <span>English</span>
              <span className="text-xs">▼</span>
            </div>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-10">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div className="relative" ref={currencyRef}>
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => toggleDropdown('currency')}
            >
              <span>USD</span>
              <span className="text-xs">▼</span>
            </div>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-10">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
          <a href="/login" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaUser />
            <span>Login</span>
          </a>

          {/* Wishlist */}
          <a href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaHeart />
            <span>Wishlist</span>
          </a>

          {/* Cart */}
          <a href="/cart" className="cursor-pointer hover:text-gray-200">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
