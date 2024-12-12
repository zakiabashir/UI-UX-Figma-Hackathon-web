import React from "react";
import Image from "next/image";
import faqImage from "/public/images/image 1174.png"; // Adjust the path based on your folder structure

export default function Faq() {
  return (
    <div className="min-h-screen py-10 m-auto max-w-[1920px] relative">
      {/* Rectangle Section */}
      <div className="absolute left-0 w-full h-[200px] bg-[#F6F5FF] flex flex-col items-center justify-center">
        <h1
          className="text-[#151875] font-bold text-center font-[Josefin Sans]"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Faq
        </h1>
        <p
          className="mt-3 text-center"
          style={{
            fontFamily: "Josefin Sans",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. Faq</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="relative mt-[200px] px-4 md:px-10 flex flex-col lg:flex-row gap-10">
        {/* Left Column: General Information */}
        <div className="lg:w-1/2">
          <h2 className="text-[#151875] text-xl md:text-2xl font-bold mb-6 mt-8 lg:ml-10">
            General Information
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#151875] font-semibold mt-4 lg:ml-10">
                What is your return policy?
              </h3>
              <p className="text-[#8A8FB9] text-[14px] mt-2 lg:ml-10 font-lato">
                If 30 days have gone by since your purchase, unfortunately, <br /> we cannot
                offer you a refund or exchange.
              </p>
            </div>
            <div>
              <h3 className="text-[#151875] font-semibold mt-4 lg:ml-10">
                Do you offer international shipping?
              </h3>
              <p className="text-[#8A8FB9] text-[14px] mt-2 lg:ml-10 font-lato">
                Yes, we ship internationally. Shipping costs will vary depending <br /> on your
                location and the size of your order.
              </p>
            </div>
            <div>
              <h3 className="text-[#151875] font-semibold mt-4 lg:ml-10">
                How can I track my order?
              </h3>
              <p className="text-[#8A8FB9] text-[14px] mt-2 lg:ml-10 font-lato">
                Once your order is shipped, you will receive a tracking number <br /> via email.
                You can use this to check the order status.
              </p>
            </div>
            <div>
              <h3 className="text-[#151875] font-semibold mt-4 lg:ml-10">
                What payment methods do you accept?
              </h3>
              <p className="text-[#8A8FB9] text-[14px] mt-2 lg:ml-10 font-lato">
                We accept all major credit cards, PayPal, and Apple Pay. You can choose <br />
                your preferred payment method during the checkout process.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Ask a Question Form */}
        <div className="mt-8 lg:mt-0 lg:w-1/2  p-6 md:p-8 rounded-lg shadow-md">
        <div className="my-10 bg-[#F6F5FF] w-560 p-6
         ">
          <h2 className="text-[#151875] text-xl  md:text-2xl font-bold mb-6">Ask a Question</h2>
          <form className="space-y-4 md:space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            />
            <textarea
              placeholder="Message"
              className="w-full h-[150px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-3 rounded-md hover:bg-[#e42a75] transition"
            >
              Send Mail
            </button>
          </form>
        </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex justify-center">
        <Image
          src={faqImage}
          alt="FAQ Section Illustration"
          width={1000}
          height={400}
          className="rounded-lg w-full max-w-[1000px]"
        />
      </div>
    </div>
  );
}