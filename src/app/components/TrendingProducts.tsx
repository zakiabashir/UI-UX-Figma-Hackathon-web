import Image from "next/image";

const TrendingProducts = () => {
  return (
    <div >
      <div className="flex flex-col items-center gap-10 py-6 mt-6">
        <h1 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] flex place-content-center">
          Trending Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
{/* card1*/}
          <div className="flex flex-col items-center shadow-custom ">
            <div className="bg-[#F5F6F8] w-60 h-60 mt-3 flex justify-center items-center">
              <div className="h-[178px]">
                <Image
                  src={"/images/image11.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever chair</div>
              <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$26.00</span>
      <span className="text-sm text-[#1A0B5B] opacity-30  line-through ml-2">$42.00</span>
    </div>
            </div>
          </div>
{/* card2*/}
          <div className="flex flex-col items-center shadow-custom ">
            <div className="bg-[#F5F6F8] w-60 h-60 mt-3 flex justify-center items-center">
              <div className="h-[178px]">
                <Image
                  src={"/images/image12.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever chair</div>
              <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$26.00</span>
      <span className="text-sm text-[#1A0B5B] opacity-30  line-through ml-2">$42.00</span>
    </div>
            </div>
          </div>
{/* card */}
<div className="flex flex-col items-center shadow-custom ">
            <div className="bg-[#F5F6F8] w-60 h-60 mt-3 flex justify-center items-center">
              <div className="h-[178px]">
                <Image
                  src={"/images/image13.png"}
                  alt="Logo"
                  width={178}
                  height={178}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever chair</div>
              <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$26.00</span>
      <span className="text-sm text-[#1A0B5B] opacity-30  line-through ml-2">$42.00</span>
    </div>
            </div>
          </div>
{/* card */}
<div className="flex flex-col items-center shadow-custom ">
            <div className="bg-[#F5F6F8] w-60 h-60 mt-3 flex justify-center items-center">
              <div className="h-[178px]">
                <Image
                  src={"/images/image14.png"}
                  alt="Logo"
                  width={220}
                  height={220}
                />
              </div>
            </div>
            <div className="text-center flex flex-col items-center gap-1 my-5 mb-8 text-[#151875]">
              <div className="text-base font-bold">Cantilever chair</div>
              <div className="flex items-center">
      <span className="text-base font-medium text-[#151875]">$26.00</span>
      <span className="text-sm text-[#1A0B5B] opacity-30  line-through ml-2">$42.00</span>
    </div>
            </div>
          </div>
{/* card end */}
          
         
          
        </div>
      </div>


      {/* newsection */}
      <div className="w-[71.5rem] mx-[12.8rem] flex gap-6 justify-center mt-6 ">

{/* card */}
        <div className=" w-[24.5rem] h-64 flex flex-col gap-1 bg-[#FFF6FB] rounded-lg items-center justify-center">
           <div className="mt-6 mr-[5rem] ">
      <h2 className="text-[#151875] text-xl font-semibold whitespace-nowrap mb-1">
        23% off in all products
      </h2>
      <a
        href="#"
        className="text-[#FB4997] font-semibold border-b border-[#FB4997] "
      >
        Shop Now
      </a>
    </div>
    <div className="ml-40 mt-[-2.5rem]">
    <img
      src="/images/image15.png"
      alt="Clock"
      className="w-48 h-48"
    /></div> 
        </div>

{/* card */}
        <div className="w-[24.5rem] h-64 bg-[#EEEFFB] rounded-lg flex flex-col items-center justify-between">
        <div className="mt-[2rem] ml-5 ">
      <h2 className="text-[#151875] text-xl font-semibold whitespace-nowrap mb-1">
        23% off in all products
      </h2>
      <a
        href="#"
        className="text-[#FB4997] font-semibold border-b border-[#FB4997] "
      >
          View Collection
      </a>
      <div className="ml-16 mt-1 ">
    <img
      src="/images/image16.png"
      alt="Clock"
      className="w-[16.5rem] h-[10rem] "
    /></div> 
    </div>
        </div>
{/* card  */}
        <div className="w-[18rem] h-64 flex flex-col gap-6 ">
           {/* Product 1 */}
     <div className="flex justify-left items-center">
     <div className="flex w-[6.5rem] items-center bg-[#F5F6F8] shadow-sm">
      <img
        src="/images/image17.png"
        alt="Executive Seat Chair"
        className="w-[5rem] h-[4.3rem] object-contain ml-3 "
      />
      </div>
      <div className="ml-2">
        <p className="text-[#151875] text-base font-bold">Executive Seat Chair</p>
        <p className="text-[#151875] text-sm line-through">$32.00</p>
      </div>
    </div> 

         {/* Product 2 */}
         <div className="flex justify-left items-center">
     <div className="flex w-[6.5rem] items-center bg-[#F5F6F8] shadow-sm">
      <img
        src="/images/image18.png"
        alt="Executive Seat Chair"
        className="w-[5rem] h-[4.3rem] object-contain ml-3 "
      />
      </div>
      <div className="ml-2">
        <p className="text-[#151875] text-base font-bold">Executive Seat Chair</p>
        <p className="text-[#151875] text-sm line-through">$32.00</p>
      </div>
    </div> 
        {/* Product 3 */}
        <div className="flex justify-left items-center">
     <div className="flex w-[6.5rem] items-center bg-[#F5F6F8] shadow-sm">
      <img
        src="/images/image19.png"
        alt="Executive Seat Chair"
        className="w-[5rem] h-[4.3rem] object-contain ml-3 "
      />
      </div>
      <div className="ml-2">
        <p className="text-[#151875] text-base font-bold">Executive Seat Chair</p>
        <p className="text-[#151875] text-sm line-through">$32.00</p>
      </div>
    </div> 
        </div>

 
</div>

{/* newsection */}
    </div>
  );
};

export default TrendingProducts;






       
  {/* Left Section */}
  {/* <div className="border border-black w-10 h-10 flex flex-col gap-5 bg-[#FFF6FB] rounded-lg items-center justify-between"> */}
    {/* <div className="mb-32 ">
      <h2 className="text-[#151875] text-2xl font-bold mb-4 whitespace-nowrap">
        23% off in all products
      </h2>
      <a
        href="#"
        className="text-[#FB4997] font-medium border-b border-[#FB4997]"
      >
        Shop Now
      </a>
    </div>
    <div className="ml-[-1rem]">
    <img
      src="/images/image15.png"
      alt="Clock"
      className="w-5 h-5 object-contain"
    /></div> */}
  {/* </div> */}

  {/* Middle Section */}
  {/* <div className="border border-black w-10 h-10 bg-[#EEEFFB] rounded-lg flex items-center justify-between"> */}
    {/* <div>
      <h2 className="text-[#151875] text-2xl font-bold mb-4">
        23% off in all products
      </h2>
      <a
        href="#"
        className="text-[#FB4997] font-bold underline hover:no-underline"
      >
        View Collection
      </a>
    </div>
    <div>
    <img
      src="/images/image16.png"
      alt="Shelf"
      className="w-32 h-24 object-contain"
    />
    </div> */}
  {/* </div> */}

  {/* Right Section */}
  {/* <div className="border border-black w-10 h-10 flex flex-col gap-6 "> */}
    {/* Product 1 */}
    {/* <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
      <img
        src="/path/to/chair1-image.png"
        alt="Executive Seat Chair"
        className="w-16 h-16 object-contain mr-4"
      />
      <div>
        <p className="text-[#151875] text-sm font-bold">Executive Seat Chair</p>
        <p className="text-[#151875] text-sm">$32.00</p>
      </div>
    </div> */}

    {/* Product 2 */}
    {/* <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
      <img
        src="/path/to/chair2-image.png"
        alt="Executive Seat Chair"
        className="w-16 h-16 object-contain mr-4"
      />
      <div>
        <p className="text-[#151875] text-sm font-bold">Executive Seat Chair</p>
        <p className="text-[#151875] text-sm">$32.00</p>
      </div>
    </div> */}

    {/* Product 3 */}
    {/* <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
      <img
        src="/path/to/chair3-image.png"
        alt="Executive Seat Chair"
        className="w-16 h-16 object-contain mr-4"
      />
      <div>
        <p className="text-[#151875] text-sm font-bold">Executive Seat Chair</p>
        <p className="text-[#151875] text-sm">$32.00</p>
      </div>
    </div> */}
  {/* </div> */}