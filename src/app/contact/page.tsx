import React from "react";
import { Josefin_Sans } from "next/font/google"; // Use PascalCase for the font

// Load the Josefin Sans font at the module scope
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

export default function Contact() {
  return (
    <div className="min-h-screen py-10 relative">
      {/* Rectangle Section */}
      <div className="absolute mt-[-44px] left-0 w-full h-[200px] bg-[#F6F5FF]">
        <h1
          className="text-[#151875] font-bold ml-[283px] mt-[67px] font-[Josefin Sans]"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Contact Us
        </h1>
        <p
          className="mt-5 ml-[286px]"
          style={{
            fontFamily: "Josefin Sans",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. Contact Us</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="relative mt-[260px] px-10 flex gap-10">
        {/* Left Side: Information About Us */}
        <div className="w-1/2 ml-[240px]">
          <h2 className="text-[#151875] text-[36px] font-bold mb-4">Information About Us</h2>
          <p className="text-[#8A8FB9] mb-6 font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris tincidunt 
            venenatis magna, ut malesuada arcup <br />ulvinar vitae. Suspendisse potenti. Sed 
            sit amet dapibus.
          </p>
            {/* Dots Below */}
  <div className="flex justify-center space-x-4 mt-4 ml-[-390px]">
    <span className="block w-6 h-6 rounded-full bg-blue-600"></span>
    <span className="block w-6 h-6 rounded-full bg-pink-500"></span>
    <span className="block w-6 h-6 rounded-full bg-blue-400"></span>
  </div>


          <h3 className="text-[#151875] text-[36px] font-bold  mb-4 mt-[140px]">Get in Touch</h3>
          <p className="text-[#8A8FB9] font-lato  leading-[25.6px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Iure veritatis sint vel, maiores accusantium ut, exercit</p>
         
         
          <form>
            <div className="flex mb-4 ">
              <div className="flex-1 gap-x-2">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your name" className="mt-[40px] w-[220px] px-3 py-2 border rounded" />
              </div>
              <div className="flex-1 ">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Your email" className="ml-[-9px] mt-[40px] w-[220] px-3 py-2 border rounded" />
              </div>
            </div>
            <div className="mb-4 ">
              <label htmlFor="subject" className=" sr-only">Subject</label>
              <input type="text" id="subject" placeholder="Subject" className="mt-[15px] w-[480px] px-3 py-2 border rounded" />
            </div>
            <div className="mb-4 ">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" placeholder="Your message" className="mt-[15px] w-[480px] h-[166px] px-3 py-2 border rounded"></textarea>
            </div>
            <button type="submit" className=" bg-[#FB2E86] font-josefinsans text-white px-5 py-2 rounded">Send Mail</button>
          </form>
        </div>
{/* Right Side: Contact Way */}
<div className="w-1/2 mr-[160px]">
  <h2 className="text-[#151875] text-[36px] font-bold mb-4">Contact Way</h2>
  <div className="grid grid-cols-2 gap-11 mr-[130px] whitespace-nowrap ">
    <div className="flex items-start gap-4">
      <span className="text-blue-500 text-5xl">•</span>
      <div>
        <p className="text-[#8A8FB9] text-[14px]">Tel: 877-67-88-99</p>
        <p className="text-[#8A8FB9] text-[14px]">E-Mail: shop@store.com</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-pink-500 text-5xl">•</span>
      <div>
        <p className="text-[#8A8FB9] text-[14px]">Support Forum</p>
        <p className="text-[#8A8FB9] text-[14px]">For over 24hr</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-orange-500 text-5xl">•</span>
      <div>
        <p className="text-[#8A8FB9] text-[14px]">20 Margaret st, London</p>
        <p className="text-[#8A8FB9] text-[14px]">Great britain, 3NM98-LK</p>
      </div>
    </div>
    <div className="flex items-start gap-4">
      <span className="text-green-500 text-5xl">•</span>
      <div>
        <p className="text-[#8A8FB9] text-[14px]">Free standard shipping</p>
        <p className="text-[#8A8FB9] text-[14px]">on all orders.</p>
      </div>
    </div>
  </div>

 

          {/* Image Below Contact Way Section */}
          <div className="mt-[100px] ml-[-60px] w-[550px] flex justify-center">
            <img src="/images/contact.png" alt="Contact Us" className="w-[750px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
