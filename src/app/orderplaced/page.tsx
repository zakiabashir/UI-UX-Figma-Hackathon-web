import React from "react";
import Image from "next/image";

export default function Order() {
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
          Order Completed
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
          Home . Pages <span className="text-[#FB2E86]">. Order Completed</span>
        </p>
      </div>
      
  {/* Images Section */}
<div className="absolute left-1/2 transform flex mt-[200px] space-x-4">
  {/* First Image */}
  <img src="/images/tick.png" alt="Step 1" className="w-[170px] ml-[-55px] h-[100px] rounded-full object-cover z-10" />
</div>

 {/* Additional Image Section */}
 <div className="absolute top-[256px] ml-[150px]">
        <img
          src="/images/clock.png"
          alt="Additional"
          className="w-full h-[400px]  "
        />
      </div>

 {/* Additional Image Section2 */}
 <div className="absolute mt-[560px] ml-[230px]">
        <img
          src="/images/note.png"
          alt="2"
          className="w-[1100px] h-[100px]  "
        />
      </div>

      
      {/* Description and Button Section */}
      <div className=" mt-[100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="mt-4 text-[#151875] font-josefin-sans font-bold text-[36px]">Your Order Is Completed</p>
        
        <p className="mt-7 text-[#7E81A2] text-[16px] font-lato leading-[34px]">
          Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
        </p>

        {/* Continue Shopping Button */}
        <button className="mt-9 px-6 py-2 w-[208px] h-[59px] font-lato text-[16px] bg-[#FF3EB2] text-white font-semibold rounded-lg hover:bg-[#FB2E86] transition duration-200">
          Continue Shopping 
        </button>
          </div>
          <div className="w-[700px] mt-[100px] ml-[400px]">
        <Image
          src="/images/image 1174.png" 
          alt="brands"
          width={1920} 
          height={500} 
          className="w-full object-cover"
        />
      </div>
      
      
      
    </div>
    
  );
}
