'use client'
import React, { useState } from "react";

export default function Cart() {
  const [quantities, setQuantities] = useState([1, 1, 1, 1, 1]); // State to manage quantities of each product

  // Function to increase quantity
  const increaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  // Function to decrease quantity
  const decreaseQuantity = (index: number) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

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
          Shopping Cart
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
          Home . Pages <span className="text-[#FB2E86]">. Shopping Cart</span>
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative mt-[150px] ml-[180px] flex gap-10">
        {/* Left Column: Cart Items */}
        <div className="w-3/5 ml-[100px] mt-[140px]">
        
          <ul className="space-y-4">
            {/* Cart Item 1 */}
            <li className=" grid grid-cols-7 gap-4">
              <span className="text-[#151875] font-semibold">Product</span>
              <span className="text-[#151875] font-semibold">Price</span>
              <span className="text-[#151875] font-semibold">Quantity</span>
              <span className="text-[#151875] font-semibold">Color</span>
              <span className="text-[#151875] font-semibold">Size</span>
              <span className="text-[#151875] font-semibold">Total</span>
            </li>
            <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
            {/* Cart Item 2 */}
            <li className="grid grid-cols-7 gap-4">
              <span className="flex items-center gap-4">
                <img src="/images/p1.png" alt="Product 1" className="w-12 h-12" />
                <span>Product 1</span>
              </span>
              <span className="text-[#8A8FB9]">$50</span>
              <span className="flex items-center gap-2">
                <button onClick={() => decreaseQuantity(0)} className="text-[#FB2E86]">-</button>
                <span>{quantities[0]}</span>
                <button onClick={() => increaseQuantity(0)} className="text-[#FB2E86]">+</button>
              </span>
              <span className="text-[#8A8FB9]">Red</span>
              <span className="text-[#8A8FB9]">L</span>
              <span className="text-[#8A8FB9]">$50</span>
            </li>
            <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
            {/* Cart Item 3 */}
            <li className="grid grid-cols-7 gap-4">
              <span className="flex items-center gap-4">
                <img src="/images/p2.png" alt="Product 2" className="w-12 h-12" />
                <span>Product 2</span>
              </span>
              <span className="text-[#8A8FB9]">$30</span>
              <span className="flex items-center gap-2">
                <button onClick={() => decreaseQuantity(1)} className="text-[#FB2E86]">-</button>
                <span>{quantities[1]}</span>
                <button onClick={() => increaseQuantity(1)} className="text-[#FB2E86]">+</button>
              </span>
              <span className="text-[#8A8FB9]">Blue</span>
              <span className="text-[#8A8FB9]">M</span>
              <span className="text-[#8A8FB9]">$60</span>
            </li>
            <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
            {/* Cart Item 4 */}
            <li className="grid grid-cols-7 gap-4">
              <span className="flex items-center gap-4">
                <img src="/images/p3.png" alt="Product 3" className="w-12 h-12" />
                <span>Product 3</span>
              </span>
              <span className="text-[#8A8FB9]">$40</span>
              <span className="flex items-center gap-2">
                <button onClick={() => decreaseQuantity(2)} className="text-[#FB2E86]">-</button>
                <span>{quantities[2]}</span>
                <button onClick={() => increaseQuantity(2)} className="text-[#FB2E86]">+</button>
              </span>
              <span className="text-[#8A8FB9]">Green</span>
              <span className="text-[#8A8FB9]">S</span>
              <span className="text-[#8A8FB9]">$40</span>
            </li>
            <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
            {/* Cart Item 5 */}
            <li className="grid grid-cols-7 gap-4">
              <span className="flex items-center gap-4">
                <img src="/images/p4.png" alt="Product 4" className="w-12 h-12" />
                <span>Product 4</span>
              </span>
              <span className="text-[#8A8FB9]">$25</span>
              <span className="flex items-center gap-2">
                <button onClick={() => decreaseQuantity(3)} className="text-[#FB2E86]">-</button>
                <span>{quantities[3]}</span>
                <button onClick={() => increaseQuantity(3)} className="text-[#FB2E86]">+</button>
              </span>
              <span className="text-[#8A8FB9]">Yellow</span>
              <span className="text-[#8A8FB9]">XL</span>
              <span className="text-[#8A8FB9]">$75</span>
            </li>
          </ul>
        </div>
{/* Right Column: Cart Totals */}
<section>
<h2 className="text-[#151875] font-[Josefin Sans] ml-[15px] mt-[130px] text-[24px] whitespace-nowrap font-bold mb-6">Cart Totals</h2>
<div className="w-[350px] h-[300px] ml-[-90px] mt-[30px] bg-[#F6F5FF] p-8 shadow-md rounded-lg">
  
  <div className="space-y-4">
    <div className="flex justify-between">
      <span className="text-[#1D3178] font-lato">Subtotals:</span>
      <span className="text-[#15245E]">$325</span>
    </div>
    <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
    <div className="flex justify-between">
      <span className="text-[#1D3178] font-lato">Totals:</span>
      <span className="text-[#15245E]">$451.50</span>
    </div>
    <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
    <div className=" flex items-center justify-between text-[12px] text-[#8A91AB]">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span> {/* Green dot */}
      <p className="mr-[40px]">Shipping & taxes calculated at checkout</p>
    </div>
  </div>
  <button className="bg-[#19D16F] font-lato mt-6 text-white py-2 px-4 rounded-md hover:bg-[#0d660b] text-[14px] transition w-full">
    Proceed To Checkout
  </button>
</div>
</section>

{/* Calculate shipping */}
<section>
<h2 className="text-[#151875] font-[Josefin Sans]  absolute ml-[-320px] mt-[570px] text-[24px] whitespace-nowrap font-bold mb-6">Calculate Shipping</h2>
<div className="w-[350px] h-[300px] absolute ml-[-390px] mt-[657px] bg-[#F6F5FF] p-8 shadow-md rounded-lg">
  
  <div className="space-y-4">
    <div className="flex justify-between">
      <span className="text-[#1D3178] opacity-25 font-lato">Bangladesh</span>
    </div>
    <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
    <div className="flex justify-between">
      <span className="text-[#1D3178] opacity-25 font-lato">Mirpur Dhaka - 1200</span>
   
    </div>
    <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
    <div className="flex justify-between">
      <span className="text-[#1D3178] opacity-25 font-lato">Postal Code</span>
   
    </div>
    <div className="border-t border-[#E5E7EB] mt-2"></div> {/* Line divider */}
  </div>
  <button className="bg-[#19D16F] font-lato mt-6 text-white py-2 px-4 rounded-md hover:bg-[#0d660b] text-[14px] transition w-full">
    Calculate Shipping
  </button>
</div>
</section>

</div>


    </div>
  );
}
