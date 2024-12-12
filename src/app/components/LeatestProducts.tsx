import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Lato } from "next/font/google"; // Import Lato font

const lato = Lato({
  weight: ["400", "700"], // You can specify which weights you want
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const LatestProducts = () => {
  return (
    <section className="w-full px-6 py-12">
      <h2 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] mb-8 mt-[-1rem] flex place-content-center">
        Latest Products
      </h2>
      <div className={lato.className}>
        <div className="flex gap-12 place-content-center mt-[-1rem] mb-12">
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            New Arrival
          </a>
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            Best Seller
          </a>
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            Featured
          </a>
          <a
            href="#"
            className="text-[#151875] text-[18px] hover:text-[#FB4997] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FB4997] hover:after:w-full after:transition-all after:duration-300"
          >
            Special Offer
          </a>
        </div>
      </div>
      {/* Latest Products */}
      <div className="flex place-content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden relative group cursor-pointer">
  {/* Background container */}
  <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7] relative">

    {/* Product Image */}
    <img
      src="/images/image 1166.png"
      alt="Product 1"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[13rem] h-[13rem] rounded-lg"
    />

    {/* Sale Tag */}
    <div className=" text-white text-sm px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
                src="/images/Vector 2.png"
                alt="Product 1"
                className="w-[5rem] h-[5rem]"
              />
    </div>

      {/* Hover Icons */}
      <div className="absolute bottom-6 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* Cart Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
       <span  className="text-base bg-[#EEEFFB] text-[#2F1AC4] mt-2"><BsCart2 /></span>
      </button>
      {/* Heart Button */}
      <button className="flex items-center justify-center">
       <span className="text-base text-[#2F1AC4] mt-2"><FaRegHeart /></span>
      </button>
      {/* Search Button */}
      <button className="flex items-center justify-center">
      <span className="text-base text-[#2F1AC4] mt-2"><IoSearch /></span>
      </button>
    </div>
  </div>

  {/* Content container */}
  <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
    <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">
      Comfort Handy Craft
    </h3>
    <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$42.00</span>
      <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
    </div>
  </div>
</div>


          {/* Card 2 */}

          <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden relative group cursor-pointer">
  {/* Background container */}
  <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7] relative">

    {/* Product Image */}
    <img
      src="/images/image 15.png"
      alt="Product 1"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[13rem] rounded-lg"
    />

    {/* Sale Tag */}
    <div className=" text-white text-sm px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
                src="/images/Vector 2.png"
                alt="Product 1"
                className="w-[5rem] h-[5rem]"
              />
    </div>

       {/* Hover Icons */}
       <div className="absolute bottom-6 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* Cart Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
       <span  className="text-base bg-[#EEEFFB] text-[#2F1AC4] mt-2"><BsCart2 /></span>
      </button>
      {/* Heart Button */}
      <button className="flex items-center justify-center">
       <span className="text-base text-[#2F1AC4] mt-2"><FaRegHeart /></span>
      </button>
      {/* Search Button */}
      <button className="flex items-center justify-center">
      <span className="text-base text-[#2F1AC4] mt-2"><IoSearch /></span>
      </button>
    </div>
  </div>

  {/* Content container */}
  <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
    <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">
      Comfort Handy Craft
    </h3>
    <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$42.00</span>
      <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
    </div>
  </div>
</div>


          {/* Card 3 */}
          <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden relative group cursor-pointer">
  {/* Background container */}
  <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7] relative">

    {/* Product Image */}
    <img
      src="/images/image 1168.png"
      alt="Product 1"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[13rem] rounded-lg"
    />

    {/* Sale Tag */}
    <div className=" text-white text-sm px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
                src="/images/Vector 2.png"
                alt="Product 1"
                className="w-[5rem] h-[5rem]"
              />
    </div>

    {/* Hover Icons */}
    <div className="absolute bottom-6 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* Cart Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
       <span  className="text-base bg-[#EEEFFB] text-[#2F1AC4] mt-2"><BsCart2 /></span>
      </button>
      {/* Heart Button */}
      <button className="flex items-center justify-center">
       <span className="text-base text-[#2F1AC4] mt-2"><FaRegHeart /></span>
      </button>
      {/* Search Button */}
      <button className="flex items-center justify-center">
      <span className="text-base text-[#2F1AC4] mt-2"><IoSearch /></span>
      </button>
    </div>
  </div>

  {/* Content container */}
  <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
    <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">
      Comfort Handy Craft
    </h3>
    <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$42.00</span>
      <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
    </div>
  </div>
</div>


          {/* Card 4 */}
          <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden relative group cursor-pointer">
  {/* Background container */}
  <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7] relative">

    {/* Product Image */}
    <img
      src="/images/image 23.png"
      alt="Product 1"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[13rem] rounded-lg"
    />

    {/* Sale Tag */}
    <div className=" text-white text-sm px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
                src="/images/Vector 2.png"
                alt="Product 1"
                className="w-[5rem] h-[5rem]"
              />
    </div>

    {/* Hover Icons */}
    <div className="absolute bottom-6 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* Cart Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
       <span  className="text-base bg-[#EEEFFB] text-[#2F1AC4] mt-2"><BsCart2 /></span>
      </button>
      {/* Heart Button */}
      <button className="flex items-center justify-center">
       <span className="text-base text-[#2F1AC4] mt-2"><FaRegHeart /></span>
      </button>
      {/* Search Button */}
      <button className="flex items-center justify-center">
      <span className="text-base text-[#2F1AC4] mt-2"><IoSearch /></span>
      </button>
    </div>
  </div>

  {/* Content container */}
  <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
    <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">
      Comfort Handy Craft
    </h3>
    <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$42.00</span>
      <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
    </div>
  </div>
</div>


          {/* Card 5 */}
          <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden relative group cursor-pointer">
  {/* Background container */}
  <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7] relative">

    {/* Product Image */}
    <img
      src="/images/image 32.png"
      alt="Product 1"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[17rem] h-[13rem] rounded-lg"
    />

    {/* Sale Tag */}
    <div className=" text-white text-sm px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
                src="/images/Vector 2.png"
                alt="Product 1"
                className="w-[5rem] h-[5rem]"
              />
    </div>

    {/* Hover Icons */}
    <div className="absolute bottom-6 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* Cart Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
       <span  className="text-base bg-[#EEEFFB] text-[#2F1AC4] mt-2"><BsCart2 /></span>
      </button>
      {/* Heart Button */}
      <button className="flex items-center justify-center">
       <span className="text-base text-[#2F1AC4] mt-2"><FaRegHeart /></span>
      </button>
      {/* Search Button */}
      <button className="flex items-center justify-center">
      <span className="text-base text-[#2F1AC4] mt-2"><IoSearch /></span>
      </button>
    </div>
  </div>

  {/* Content container */}
  <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
    <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">
      Comfort Handy Craft
    </h3>
    <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$42.00</span>
      <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
    </div>
  </div>
</div>


          {/* Card 6 */}
          <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden relative group cursor-pointer">
  {/* Background container */}
  <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7] relative">

    {/* Product Image */}
    <img
      src="/images/image 3.png"
      alt="Product 1"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[13rem] rounded-lg"
    />

    {/* Sale Tag */}
    <div className=" text-white text-sm px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img
                src="/images/Vector 2.png"
                alt="Product 1"
                className="w-[5rem] h-[5rem]"
              />
    </div>

    {/* Hover Icons */}
    <div className="absolute bottom-6 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
      {/* Cart Button */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
       <span  className="text-base bg-[#EEEFFB] text-[#2F1AC4] mt-2"><BsCart2 /></span>
      </button>
      {/* Heart Button */}
      <button className="flex items-center justify-center">
       <span className="text-base text-[#2F1AC4] mt-2"><FaRegHeart /></span>
      </button>
      {/* Search Button */}
      <button className="flex items-center justify-center">
      <span className="text-base text-[#2F1AC4] mt-2"><IoSearch /></span>
      </button>
    </div>
  </div>



  {/* Content container */}
  <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
    <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">
      Comfort Handy Craft
    </h3>
    <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$42.00</span>
      <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default LatestProducts;

// <div className="w-[360px] h-[316px] bg-white rounded-lg overflow-hidden ">

// {/* Background color container */}
// <div className="w-[22.4rem] h-[16rem] bg-[#F7F7F7]"></div>

// {/* Image container with margin to move the image down */}
// <div className="mt-[-14rem]">
//   <img
//     src="/images/image 15.png"
//     alt="Product 1"
//     className="mx-auto w-[13rem] h-[13rem] rounded-t-lg"
//   />
// </div>

// {/* Content container */}
// <div className="p-4 mt-3 flex place-content-center gap-[4rem]">
//   <h3 className="text-base font-medium text-[#151875] border-b-2 mt-[-2px]">Comfort Handy Craft</h3>
//   <div className="flex items-center">
//     <span className="text-base font-medium text-[#151875]">$49.99</span>
//     <span className="text-sm text-[#FB2448] line-through ml-2">$65.00</span>
//   </div>
// </div>
// </div>
