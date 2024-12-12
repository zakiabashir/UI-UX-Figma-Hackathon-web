import React from 'react'

const LatestBlog = () => {
  return (
    <>
      <div className='mt-28'>
      <h1 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] flex place-content-center">
          Latest Blog
        </h1>
      </div>


     <div className="flex justify-center items-center gap-6 p-8 mt-8 ">
  {/* Card 1 */}
  <div className="w-[320px] h-[440px] bg-white border-[2px] hover:border-[#7E33E0] rounded-lg shadow-custom">
    <img
      src="/images/JIUjvqe2ZHg.png"
      alt="Blog Image 1"
      className="w-full h-[250px] object-cover rounded-t-lg"
    />
    <div className="p-4">
      <div className="flex items-center gap-3 text-[#151875] text-sm mb-2">
        <span className="flex items-center gap-1">
          <img src="/images/Vector.png" alt="Icon" className="w-4 h-4" />
          SaberAli
        </span>
        <span className="flex items-center gap-1">
          <img src="/images/uil_calendar-alt.png" alt="Calendar Icon" className="w-4 h-4" />
          21 August, 2020
        </span>
      </div>
      <h3 className="text-[#151875] text-lg font-bold mb-2">
        Top esssential Trends in 2021
      </h3>
      <p className="text-[#7E81A2] text-sm mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightly
      </p>
      <a href="#" className="text-[#151875] font-medium hover:underline hover:text-[#FB4997]">
        Read More
      </a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-[320px] h-[440px] bg-white border-[2px] border-transparent rounded-lg shadow-custom hover:border-[#7E33E0]">
    <img
      src="/images/2dcYhvbHV-M.png"
      alt="Blog Image 2"
      className="w-full h-[250px] object-cover rounded-t-lg"
    />
    <div className="p-4">
      <div className="flex items-center gap-3 text-[#151875] text-sm mb-2">
        <span className="flex items-center gap-1">
          <img src="/images/Vector.png" alt="Icon" className="w-4 h-4" />
          Surfauxion
        </span>
        <span className="flex items-center gap-1">
          <img src="/images/uil_calendar-alt.png" alt="Calendar Icon" className="w-4 h-4" />
          21 August, 2020
        </span>
      </div>
      <h3 className="text-[#FB4997] text-lg font-bold mb-2">
        Top essential trends in 2021
      </h3>
      <p className="text-[#7E81A2] text-sm mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightly
      </p>
      <a href="#" className="text-[#151875] font-medium hover:underline hover:text-[#FB4997]">
        Read More
      </a>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-[320px] h-[440px] bg-white border-[2px] border-transparent rounded-lg shadow-custom hover:border-[#7E33E0]">
    <img
      src="/images/2dcYhvbHV-M (1).png"
      alt="Blog Image 3"
      className="w-full h-[250px] object-cover rounded-t-lg"
    />
    <div className="p-4">
      <div className="flex items-center gap-3 text-[#151875] text-sm mb-2">
        <span className="flex items-center gap-1">
          <img src="/images/Vector.png" alt="Icon" className="w-4 h-4" />
          SaberAli
        </span>
        <span className="flex items-center gap-1">
          <img src="/images/uil_calendar-alt.png" alt="Calendar Icon" className="w-4 h-4" />
          21 August, 2020
        </span>
      </div>
      <h3 className="text-[#151875] text-lg font-bold mb-2">
        Top esssential Trends in 2021
      </h3>
      <p className="text-[#7E81A2] text-sm mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightly
      </p>
      <a href="#" className="text-[#151875] font-medium hover:underline hover:text-[#FB4997]">
        Read More
      </a>
    </div>
  </div>
</div>


    </>
  )
}

export default LatestBlog
