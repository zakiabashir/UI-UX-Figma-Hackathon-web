import React from 'react'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import { Lato } from "next/font/google"; // Import Lato font

const lato = Lato({
  weight: ["400", "700"], // You can specify which weights you want
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
const Discountitem = () => {
  return (
    <>
    <div className='mt-[9rem]'> <h2 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] mb-8 mt-[-1rem] flex place-content-center">
        Discount Item
      </h2></div>
         <div className="w-full h-[579px] mt-10">
            <div className='w-[30rem] h-12  mx-auto'>
            <div className={lato.className}>
        <div className="flex gap-12 justify-center mt-2 mr-8">
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            Wood Chair
          </a>
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            Plastic Chair
          </a>
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            Sofa Collection
          </a>
        </div>
      </div>
            </div>
          <div className=" w-[1050px] h-[500px] mt-[-3rem] mx-auto flex">

 
          <div className="w-full mt-28  p-8 rounded-lg">
      {/* Heading */}
      <h2 className="text-[#151875] text-[2.1rem] font-bold mb-2">
        20% Discount Of All Products
      </h2>

      {/* Subheading */}
      <h3 className="text-[#FB4997] text-lg font-semibold mb-4">
        Eams Sofa Compact
      </h3>

      {/* Description */}
      <p className="text-[#7E81A2] text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat
        habitasse nec, bibendum condimentum.
      </p>

      {/* Features List */}
      <div className="grid grid-cols-2 gap-y-4 mb-6">
        <div className="flex items-center">
          <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
          <p className="text-[#7E81A2] text-sm">
            Material expose like metals
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
          <p className="text-[#7E81A2] text-sm">
            Clear lines and geometric figures
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
          <p className="text-[#7E81A2] text-sm">Simple neutral colours.</p>
        </div>
        <div className="flex items-center">
          <span className="text-[#151875] text-xs mr-2"><FaCheck /></span>
          <p className="text-[#7E81A2] text-sm">
            Material expose like metals
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#FB4997] text-white px-12 py-3 rounded-s-sm text-sm font-medium hover:bg-[#E94085]">
        Shop Now
      </button>
    </div>
 

  <div>
            <div className="relative w-[500px] h-[500px]">
  {/* Circle Image */}
  <Image
    src="/images/64.png"
    alt="Circle 2"
    width={340}
    height={340}
    className="absolute mt-[5.7rem] left-[5rem]"
  />
  {/* Sofa Image */}
  <Image
    src="/images/image20.png"
    alt="Sofa"
    width={500} // Sofay ki width aur height choti rakh lein agar wo circle ke ander fit karna ho
    height={500}
    className="absolute top-[2rem] left-[0rem] w-[100rem] " // Positioning adjust karein
  />
</div>
  </div>




          </div>
        </div>
    </>
  )
}

export default Discountitem
