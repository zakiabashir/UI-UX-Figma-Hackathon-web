import React from "react";
import Image from "next/image";
import aboutImage from "/public/images/c1.png";
import { Josefin_Sans } from "next/font/google";

// Load the Josefin Sans font at the module scope
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export default function About() {
  return (
    <div className="max-w-[1920px] py-10 relative">
      {/* Rectangle Section */}
      <div className="bg-[#F6F5FF] py-12 text-center">
        <h1
          className="text-[#151875] font-bold font-Josefin text-3xl mb-2"
          style={{ lineHeight: "25.78px" }}
        >
          About Us
        </h1>
        <p className="text-[#8A8FB9] text-sm">
          Home . Pages <span className="text-[#FB2E86]">. About Us</span>
        </p>
      </div>

      {/* Main Content Section */}
      <div className="mt-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={aboutImage}
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-[#151875] font-Josefin text-xl md:text-3xl font-bold mb-4">
            Know About Our Ecommerce <br /> Business, History
          </h2>
          <p className="text-[#8A8FB9] mb-6 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <button className="bg-[#FB2E86] text-white py-3 px-6 rounded-md hover:bg-[#e42a75] transition w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="mt-20 px-6 md:px-16">
        <h2 className="text-[#151875] text-xl md:text-3xl font-bold text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-[#31208A0D] p-8 rounded-lg text-center shadow-md"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={`/images/f${i + 1}.png`}
                  alt={`Feature ${i + 1} Icon`}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-[#151875] text-lg font-semibold mb-2">
                {[
                  "Fast Delivery",
                  "Cash Back",
                  "Quality Product",
                  "24/7 Support",
                ][i]}
              </h3>
              <p className="text-[#8A8FB9] text-sm">
                {
                  [
                    "Get your orders delivered at your doorstep swiftly and safely.",
                    "Enjoy amazing cashback offers on every purchase.",
                    "We ensure the best quality products for our customers.",
                    "Our team is available 24/7 to assist you with your queries.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Client Say Section */}
      <div className="mt-20 bg-[#F6F5FF] py-16 px-6 md:px-16 text-center">
        <h2 className="text-[#151875] text-xl md:text-3xl font-bold mb-8">Our Client Say!</h2>
        <div className="flex flex-col items-center">
          {/* Client Image */}
          <Image
            src="/images/client.png"
            alt="Client"
            width={160}
            height={160}
            className="shadow-lg mb-4"
          />
          {/* Client Name */}
          <h3 className="text-[#151875] text-lg font-semibold">Salena Gomez</h3>
          <h4 className="text-[#8A8FB9] text-sm">Ceo At Webecy Digital</h4>
          {/* Client Description */}
          <p className="text-[#8A8FB9] text-sm mt-4 max-w-2xl">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. It has
            been an absolute pleasure working with this team!"
          </p>
        </div>
      </div>
    </div>
  );
}
