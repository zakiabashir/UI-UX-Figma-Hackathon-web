import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Footer Main Section */}
      <div className="bg-[#EEEFFB] border-t-2 mt-24 px-6 sm:px-12 lg:px-[8rem] pt-10">
        <div className="max-w-[1536px] mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-[#151875] text-2xl font-bold mb-4">Hekto</h2>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full sm:w-[250px] py-2 px-3 rounded-md border border-[#E0E0E0] bg-white text-[#7E81A2] text-sm focus:outline-none focus:ring focus:ring-[#7E33E0]"
              />
              <button className="w-full sm:w-auto px-6 py-2 bg-[#FB4997] text-white text-sm font-medium rounded-sm hover:bg-[#E94085]">
                Sign Up
              </button>
            </div>
            <p className="text-[#7E81A2] text-sm mb-1">Contact Info</p>
            <p className="text-[#7E81A2] text-sm">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-[#151875] text-lg font-bold mb-4">Categories</h3>
            <ul className="text-[#7E81A2] text-sm space-y-3">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="text-[#151875] text-lg font-bold mb-4">Customer Care</h3>
            <ul className="text-[#7E81A2] text-sm space-y-3">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-[#151875] text-lg font-bold mb-4">Pages</h3>
            <ul className="text-[#7E81A2] text-sm space-y-3">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#EEEFFb] py-4 px-6 sm:px-12 lg:px-[8rem]">
        <div className="max-w-[1536px] mx-auto flex flex-col sm:flex-row justify-around items-center px-4">
          {/* Footer Text */}
          <p className="text-[#7E81A2] text-sm mb-4 sm:mb-0">&copy; 2024 Webecy - All Rights Reserved</p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#151875] text-white flex justify-center items-center rounded-xl w-8 h-8 hover:bg-[#7E33E0]"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-[#151875] text-white flex justify-center items-center rounded-xl w-8 h-8 hover:bg-[#7E33E0]"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="bg-[#151875] text-white flex justify-center items-center rounded-xl w-8 h-8 hover:bg-[#7E33E0]"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;