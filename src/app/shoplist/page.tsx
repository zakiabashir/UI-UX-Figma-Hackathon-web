import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {  FaSearchPlus } from "react-icons/fa";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google"; // Use PascalCase for the font

// Load the Josefin Sans font at the module scope
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});
export default function ShopList() {
  const products = [
    {
      id: 1,
      name: "Accumsan tincidunt",
      image: "/images/s1.png",
      price: "$49.00",
      discountedPrice: "$39.00",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 2,
      name: "Product Name 2",
      image: "/images/s2.png",
      price: "$59.00",
      discountedPrice: "$45.00",
      rating: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 3,
      name: "Product Name 3",
      image: "/images/s3.png",
      price: "$75.00",
      discountedPrice: "$65.00",
      rating: 3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 4,
      name: "Product Name 4",
      image: "/images/s4.png",
      price: "$99.00",
      discountedPrice: "$85.00",
      rating: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 5,
      name: "Product Name 5",
      image: "/images/s5.png",
      price: "$120.00",
      discountedPrice: "$99.00",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 6,
      name: "Product Name 6",
      image: "/images/s6.png",
      price: "$39.00",
      discountedPrice: "$25.00",
      rating: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
      id: 7,
      name: "Product Name 7",
      image: "/images/s7.png",
      price: "$69.00",
      discountedPrice: "$49.00",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
  ];

  return (
    <div className="min-h-screen py-10">
      {/* Rectangle Section */}
      <div className="mt-[-70px] relative w-full h-[240px] bg-[#F6F5FF]">
        <h1
          className="mt-6 text-[#151875] font-bold ml-[279px] pt-[67px]"
          style={{
            fontSize: "36px",
            lineHeight: "25.78px",
          }}
        >
          Shop List
        </h1>
        <p
          className="mt-5 ml-[282px]"
          style={{
            fontFamily: "Josefin Sans",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "14.4px",
            color: "black",
          }}
        >
          Home . Pages <span className="text-[#FB2E86]">. Shop List</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="mt-[110px] w-full flex items-center justify-between px-10">
        <div>
          <h2
            className="text-[#151875] font-[Josefin Sans] ml-[230px] font-bold"
            style={{
              fontFamily: "Josefin Sans",
              fontSize: "22px",
              lineHeight: "25.78px",
            }}
          >
            Ecommerce Accessories & Fashion Items
          </h2>
          <p
            className="mt-2 ml-[233px]"
            style={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14.4px",
              color: "#8A8FB9",
            }}
          >
            About 9,620 results (0.62 seconds)
          </p>
        </div>

        {/* Sort by and Per Page Section */}
        <div className="flex items-center gap-4 mr-[210px]">
          {/* Per Page */}
          <div className="flex items-center">
            <label
              htmlFor="per-page"
              className="mr-2 text-[#3F509E] text-sm font-medium"
            >
              Per Page:
            </label>
            <input
              type="number"
              id="per-page"
              name="per-page"
              className="w-[55px] h-[25px] border border-[#E7E6EF] p-1 text-sm"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center">
            <label
              htmlFor="sort-by"
              className="mr-2 text-sm font-medium text-[#3F509E]"
            >
              Sort By:
            </label>
            <select
              id="sort-by"
              name="sort-by"
              className="border border-[#E7E6EF] w-[110px] h-[25px] p-1 text-sm"
            >
              <option value="relevance">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center">
            <label
              htmlFor="view"
              className="mr-2 text-sm font-medium text-[#3F509E]"
            >
              View:
            </label>
            <div className="flex gap-4">
              <Image
                src="/images/v1.png"
                alt="Grid View"
                width={17}
                height={16}
              />
              <Image
                src="/images/v2.png"
                alt="List View"
                width={17}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex flex-col items-center gap-8 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[999px] h-[254px] flex items-center gap-6 shadow-sm p-4 rounded-lg"
          >
            {/* Left Image */}
            <div className="w-[30%] h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover "
              />
            </div>

            {/* Right Details */}
            <div className="w-[70%] mt-[20px] flex flex-col justify-between">
              {/* Product Name */}
              <h2 className="text-[#151875] text-[20px] font-bold mb-[9px]">
                {product.name}
              </h2>

              {/* Prices */}
              <div className="flex items-center gap-4">
                <p className="text-red-500 line-through">{product.price}</p>
                <p className="text-green-600 font-bold">
                  {product.discountedPrice}
                </p>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-1">
                {"★"
                  .repeat(product.rating)
                  .padEnd(5, "☆")
                  .split("")
                  .map((star, index) => (
                    <span
                      key={index}
                      className={`text-${
                        star === "★" ? "yellow-400" : "gray-300"
                      } text-xl`}
                    >
                      {star}
                    </span>
                  ))}
              </div>

              {/* Description */}
              <p className="text-[#A9ACC6] text-[16px]">
                {product.description}
              </p>

              {/* Icons */}

  <div className="flex items-center gap-7 mt-[16px]">
  {/* Shopping Cart Icon */}
  <div className="relative">
    <span  className="text-[#FB2E86] text-xl cursor-pointer"><FaShoppingCart /></span>
    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
     <span className="text-[#535399]"> <FaShoppingCart  /></span>
    </div>
  </div>

  {/* Heart Icon */}
  <div className="relative">
   <span className="text-red-500 text-xl cursor-pointer"><FaHeart  /></span> 
    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
      <span  className="text-[#535399]"><FaHeart /></span>
    </div>
  </div>

  {/* Search Icon */}
  <div className="relative">
    <span  className="text-blue-600 text-xl cursor-pointer"><FaSearchPlus /></span>
    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-lg">
    <span  className="text-[#535399]">  <FaSearchPlus /></span>
    </div>
  </div>
</div>


            </div>
          </div>
        ))}

<div className="flex place-content-center mt-10">
      <Link href="/shoplistsidebar"><button className=" px-14 py-2 bg-[#FB4997] text-white text-sm font-medium rounded-sm hover:bg-[#E94085]">
          Next
        </button></Link>
</div>  

        <div className="w-[700px] mt-[120px] ml-[0px]">
        <Image
          src="/images/image 1174.png" 
          alt="brands"
          width={1920} 
          height={500} 
        />
      </div>
      </div>

     
    </div>
  );
}
