import React from 'react'

const TopCategories = () => {
  return (
    <>
        <div className='mt-[-2rem]'> <h2 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] mb-8 mt-[-1rem] flex place-content-center">
        Top Categories
      </h2></div>


{/* chair  */}
<div className="w-full flex flex-col items-center gap-8 p-8">
  {/* Chair Items Section */}
  <div className="flex justify-center gap-6">

    <div>
    {/* Chair Item 1 */}
    <div className="relative w-[14rem] h-[14rem] flex items-center justify-center group">
  {/* Purple Arc (Behind Entire Circle) */}
  <div className="absolute inset-0 w-[14.2rem] h-[14.2rem] mt-1 ml-[-.5rem] bg-[#762ad8] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

  {/* Main Circle */}
  <div className="relative bg-[#F6F7FB] rounded-full w-[14rem] h-[14rem] flex items-center justify-center shadow-custom">
    {/* Product Image */}
    <img
      src="/images/image 20.png"
      alt="Mini LCW Chair"
      className="w-[8rem] h-[8rem] object-contain"
    />

    {/* View Shop Button */}
    <button className="absolute bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View Shop
    </button>
  </div>
</div>
<div className="text-center mt-6">
      <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
      <p className="text-[#151875] text-sm">$56.00</p>
    </div>
</div>


    {/* Chair Item 2 */}
<div>
    <div className="relative w-[14rem] h-[14rem] flex items-center justify-center group">
  {/* Purple Arc (Behind Entire Circle) */}
  <div className="absolute inset-0 w-[14.2rem] h-[14.2rem] mt-1 ml-[-.5rem] bg-[#762ad8] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

  {/* Main Circle */}
  <div className="relative bg-[#F6F7FB] rounded-full w-[14rem] h-[14rem] flex items-center justify-center shadow-custom">
    {/* Product Image */}
    <img
      src="/images/image 1168.png"
      alt="Mini LCW Chair"
      className="w-[8rem] h-[8rem] object-contain"
    />

    {/* View Shop Button */}
    <button className="absolute bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View Shop
    </button>
  </div>
</div>
<div className="text-center mt-6">
      <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
      <p className="text-[#151875] text-sm">$56.00</p>
    </div>
    </div>
    
    {/* Chair Item 3 */}
    <div>
    <div className="relative w-[14rem] h-[14rem] flex items-center justify-center group">
  {/* Purple Arc (Behind Entire Circle) */}
  <div className="absolute inset-0 w-[14.2rem] h-[14.2rem] mt-1 ml-[-.5rem] bg-[#762ad8] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

  {/* Main Circle */}
  <div className="relative bg-[#F6F7FB] rounded-full w-[14rem] h-[14rem] flex items-center justify-center shadow-custom">
    {/* Product Image */}
    <img
      src="/images/image 1168.png"
      alt="Mini LCW Chair"
      className="w-[8rem] h-[8rem] object-contain"
    />

    {/* View Shop Button */}
    <button className="absolute bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View Shop
    </button>
  </div>
</div>
<div className="text-center mt-6">
      <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
      <p className="text-[#151875] text-sm">$56.00</p>
    </div>
    </div>


    {/* Chair Item 4 */}
    <div>
    <div className="relative w-[14rem] h-[14rem] flex items-center justify-center group">
  {/* Purple Arc (Behind Entire Circle) */}
  <div className="absolute inset-0 w-[14.2rem] h-[14.2rem] mt-1 ml-[-.5rem] bg-[#762ad8] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

  {/* Main Circle */}
  <div className="relative bg-[#F6F7FB] rounded-full w-[14rem] h-[14rem] flex items-center justify-center shadow-custom">
    {/* Product Image */}
    <img
      src="/images/image 1168.png"
      alt="Mini LCW Chair"
      className="w-[8rem] h-[8rem] object-contain"
    />

    {/* View Shop Button */}
    <button className="absolute bottom-6 px-3 py-1 bg-[#34D399] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View Shop
    </button>
  </div>
</div>
<div className="text-center mt-6">
      <h3 className="text-[#151875] text-sm font-medium">Mini LCW Chair</h3>
      <p className="text-[#151875] text-sm">$56.00</p>
    </div>
    </div>
  </div>

</div>

      <div className='flex gap-3 place-content-center '>
<div className='w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]'></div>
<div className='w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]'></div>
<div className='w-[10px] h-[10px] border-2 border-[#FB2E86] rounded-lg transform cursor-pointer hover:bg-[#FB2E86]'></div>
</div>
    </>
  )
}

export default TopCategories
