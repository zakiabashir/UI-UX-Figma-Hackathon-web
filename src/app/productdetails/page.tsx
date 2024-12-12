import React from "react";
import Image from "next/image";

export default function ProductDetails() {
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
          Product Details
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
          Home . Pages <span className="text-[#FB2E86]">. Product Details</span>
        </p>
      </div>

      {/* Product Details Rectangle Section */}
           
      <div className="absolute w-[960px] h-[509px] top-[329px] left-[271px] bg-white rounded-tl-lg shadow-lg">
           {/* Right Side Product Details */}
           <div className="ml-[570px] mt-[16px] flex flex-col items-start justify-center p-4 w-[60%] h-full">
          <h1 className="text-[#151875] font-bold text-[36px] mb-2 ">Playwood Arm Chair</h1>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400 text-[14px] font-sans">★★★★☆</span>
            <span>(22)</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <p className="text-red-500 line-through text-[16px]">$49.00</p>
            <p className="text-[#151875] font-bold text-[16px]">$26.00</p>
          </div>
          <p className="font-sans mb-4 text-[16px] text-[#A9ACC6]">
            A beautiful playwood arm chair that adds a touch of <br />elegance and comfort to any room.
          </p>
          <div className="flex items-center gap-2">

  <span className="font-[Josefin Sans] text-[#151875] py-2 text-[16px] font-semibold">Add to Cart</span>
  <span className="text-[#151875] text-lg  text-[16px] font-semibold">&#10084;</span>
</div>

          <div className="flex items-center gap-4 mb-2">
            <span className="font-[Josefin Sans] text-[#151875] text-[16px] font-semibold">Categories:</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#151875] text-[16px] font-semibold">Tags</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#151875] text-[16px] font-semibold whitespace-nowrap">Share:</span>
            <div className="flex gap-2">
              <Image src="/images/icons-fit.png" alt="Facebook" width={60} height={24} />
            
            </div>
          </div>
        </div>
        {/* Left Side Images */}
        <section className="absolute mt-[-523px]">
        <Image src="/images/p4.png" alt="Product image 4" width={375} height={487} className="ml-[190px] " />
        </section>
        <div className="flex items-center justify-center gap-4 ml-[-99px] mt-[-385px] w-[40%] h-full">
          <div className="flex flex-col gap-4 mt-[-300px]">
            <Image src="/images/p1.png" alt="Product Image 1" width={150} height={150} className="rounded-lg" />
            <Image src="/images/p2.png" alt="Product Image 2" width={150} height={150} className="rounded-lg" />
            <Image src="/images/p3.png" alt="Product Image 3" width={150} height={150} className="rounded-lg" />
          
          </div>
        </div>
        <div className="mt-8">
  {/* Section Headings */}
  <div className="flex gap-10 items-center mb-4 font-[Josefin Sans] text-[16px]">
    <h4 className="text-lg font-bold text-[#151875]">Description</h4>
    <h4 className="text-lg font-bold text-[#151875]">Additional Info</h4>
    <h4 className="text-lg font-bold text-[#151875]">Reviews</h4>
    <h4 className="text-lg font-bold text-[#151875]">Video</h4>
  </div>

  {/* Description */}
  <div className="mb-6">
    <h4 className="font-semibold text-[#151875] mb-2 mt-11">Varius tempor.</h4>
    <p className="text-[13px] text-[#A9ACC6] font-Josefin Sans line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
      est bibendum. A dish Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam heroine
      tincidunt. The Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.
      Eu in fringilla vulputate nunchiyo nec. Dui, massa viverra ...
    </p>
  </div>

  {/* More Details */}
  <div className="mb-6">
  <h4 className="text-[#151875] mb-2 font-semibold">More details</h4>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[14px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[13px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[14px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
  <div className="flex items-start gap-2 mb-2">
    <Image
      src="/images/md-arrow.png"
      alt="Arrow Icon"
      width={16}
      height={16}
    />
    <p className="text-[14px] text-[#A9ACC6] font-[Josefin Sans] line-[29px] text-left text-underline-position-from-font text-decoration-skip-ink-none whitespace-nowrap">
      Aliquam dis vulputate vulputate integer sagittis. Faucibus diam arcu,
      nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
      massa viverra.
    </p>
  </div>
</div>
</div>
 </div>
</div>


    
  );
}