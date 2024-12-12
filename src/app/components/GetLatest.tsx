import React from 'react';

const GetLatest: React.FC = () => {
  return (
    <>
    <div
      className="relative w-full h-[400px] bg-cover bg-center mt-28 mb-20"
      style={{ backgroundImage: "url('/images/Rectangle 102.png')" }}
    >
      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-[#151875] text-3xl font-bold mb-4">
          Get Latest Update By Subscribe <br /> Our Newsletter
        </h2>
        <button className="px-12 py-3 bg-[#FB4997] text-white text-sm font-medium rounded hover:bg-[#E94085] transition-colors">
          Shop Now
        </button>
      </div>
    </div>

    {/* Logos Section */}
    <div className="absolute w-full bg-white py-6 flex items-center justify-center gap-12">
        <img
          src="/images/image 1174.png"
          alt="Logo 5"
          className=" object-contain"
        />
      </div>

      <div className='mt-72'></div>
    </>
  );
};

export default GetLatest;
