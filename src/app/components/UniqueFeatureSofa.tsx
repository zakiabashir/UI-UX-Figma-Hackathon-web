import React from "react";
import Image from "next/image";

const UniqueFeatureSofa = () => {
  return (
    <>
    
        <div className="w-full h-[579px] bg-[#F1F0FF] ">
          <div className=" w-[1050px] h-[579px] mx-auto flex">

            <div>
            <div className="relative w-[500px] h-[500px]">
  {/* Circle Image */}
  <Image
    src="/images/Ellipse 63.png"
    alt="Circle 2"
    width={500}
    height={500}
    className="absolute mt-8 ml-[-1.5rem]"
  />
  {/* Sofa Image */}
  <Image
    src="/images/sofa blue.png"
    alt="Sofa"
    width={500} // Sofay ki width aur height choti rakh lein agar wo circle ke ander fit karna ho
    height={500}
    className="absolute top-[25px] left-[50px]" // Positioning adjust karein
  />
</div>
  </div>


  <div>

  <div className="w-full mt-16 p-8 ml-5 rounded-lg">
  {/* Heading */}
  <h2 className="text-[#151875] text-[2.1rem] font-bold mb-6">
    Unique Features Of letaest & Trending Products
  </h2>

  {/* Feature List */}
  <ul className="space-y-4 mb-6 ml-[-.5rem]">
    <li className="flex items-center">
      <span className="w-[11px] h-[11px] bg-[#FB2E86] rounded-full mr-4"></span>
      <p className="text-[#ACABC3] text-[15px] font-medium">
        All frames constructed with hardwood solids and laminates
      </p>   
    </li>
    <li className="flex items-center">
      <span className="w-[11px] h-[11px] bg-[#2B2BF5] rounded-full mr-4 mb-6"></span>
      <p className="text-[#ACABC3] text-[15px] font-medium">
      Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails
      </p>   
    </li>
    <li className="flex items-center">
      <span className="w-[11px] h-[11px] bg-[#2BF5CC] rounded-full mr-4"></span>
      <p className="text-[#ACABC3] text-[15px] font-medium">
        Arms, backs and seats are structurally reinforced
      </p>
    </li>
  </ul>

  {/* Add to Cart Section */}
  <div className="flex items-center mt-8">
    <button className="bg-[#FB2E86] border text-white px-8 py-3 rounded-sm text-sm font-bold  hover:bg-[#E94085] ">
      Add To Cart
    </button>
    <div className="ml-5">
      <p className="text-[#151875] text-sm font-bold">B&B Italian Sofa</p>
      <p className="text-[#7E81A2] text-sm">$32.00</p>
    </div>
  </div>
</div>


  </div>






          </div>
        </div>
        <div className='mb-[5rem]'></div>
    </>
  );
};

export default UniqueFeatureSofa;
