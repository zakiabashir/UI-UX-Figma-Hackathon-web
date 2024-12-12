import Image from "next/image";
import { FC } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  code: string;
  price: string;
  isLarge?: boolean; // Optional prop for large images
  isSmall?: boolean; // Optional prop for smaller images
}

const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  title,
  code,
  price,
  isLarge = false,
  isSmall = false,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-xl mx-auto p-4 flex flex-col items-center relative w-[250px] h-[450px] mb-6 group hover:bg-[#2F1AC4] hover:cursor-pointer transition-all duration-300"
    >
      {/* Image Section */}
      <div
        className={`bg-[#F6F7FB] w-[15.9rem] h-[17rem] mt-[-20px] flex justify-center items-center mb-4 relative overflow-hidden`}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={isLarge ? 200 : isSmall ? 140 : 160} // Conditionally set width
          height={isLarge ? 180 : isSmall ? 140 : 160} // Conditionally set height
          className="object-contain transition-all duration-300"
        />

        {/* Icons on Top Left of Image Section */}
        <div className="absolute top-3 left-3 flex space-x-3 text-gray-500 group-hover:opacity-100  opacity-0 transition-all duration-300">
          <div className="bg-[#EEEFFB] w-10 h-10 rounded-3xl flex  place-content-center ">
          <span  className="text-2xl text-[#2F1AC4] mt-2"><BsCart2 /></span>
          </div>
          <span  className="text-2xl text-[#1DB4E7] mt-2"><FaRegHeart /></span>
          <span className="text-2xl text-[#1DB4E7] mt-2" ><IoSearch /></span>
        </div>

        {/* View Details Button at the Bottom of the Image Section */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#10B981] text-sm text-white py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </div>
      </div>

      {/* Title and Text Section */}
      <div className="w-full group-hover:text-white transition-all duration-300 p-4 flex flex-col items-center">
        <h3 className="text-pink-600 font-semibold text-lg mb-2 group-hover:text-white transition-all duration-300">
          {title}
        </h3>
        <div className="flex justify-center mb-4">
          <span className="w-5 h-[0.4rem] bg-[#FB2E86] rounded-full mx-1"></span>
          <span className="w-5 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
          <span className="w-5 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
        </div>
        <p className="text-sm text-gray-600 mb-2 group-hover:text-white transition-all duration-300">
          Code - {code}
        </p>
        <p className="text-base font-light text-gray-800 group-hover:text-white transition-all duration-300">
          ${price}
        </p>
      </div>
    </div>
  );
};

const FeaturedProducts: FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-5">
      <h2 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#151875] mb-8 mt-[4.4rem] flex place-content-center">
        Featured Products
      </h2>
      <div className="flex place-content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[1rem] mx-auto">
          {/* Adding the isSmall prop for the smaller image size */}
          <ProductCard
            imageSrc="/images/image 1168.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isSmall={true}
          />
          <ProductCard
            imageSrc="/images/image 1.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isSmall={true}
          />
          <ProductCard
            imageSrc="/images/image 1169.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isSmall={true}
          />
          {/* The 4th card remains large */}
          <ProductCard
            imageSrc="/images/image 3.png"
            title="Cantilever chair"
            code="Y523201"
            price="42.00"
            isLarge={true}
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-[3rem]">
        <span className="w-6 h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
        <span className="w-6 h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
        <span className="w-6 h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
        <span className="w-6 h-[0.4rem] bg-[#FEBAD7] cursor-pointer hover:bg-[#FB2E86] rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default FeaturedProducts;




// import Image from "next/image";
// import { FC } from "react";

// interface ProductCardProps {
//   imageSrc: string;
//   title: string;
//   code: string;
//   price: string;
//   isLarge?: boolean; // Added an optional prop for custom image size
//   isSmall?: boolean; // Added an optional prop for smaller image size
// }

// const ProductCard: FC<ProductCardProps> = ({
//   imageSrc,
//   title,
//   code,
//   price,
//   isLarge = false,
//   isSmall = false, // Default is false for normal size
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-xl mx-auto p-4 flex flex-col items-center relative w-[250px] h-[400px] mb-2">
//       <div className={`bg-[#F6F7FB] w-[15.5rem] h-[16rem] flex justify-center items-center mb-4`}>
//         <Image
//           src={imageSrc}
//           alt={title}
//           width={isLarge ? 200 : isSmall ? 140 : 160} // Conditionally set width
//           height={isLarge ? 180 : isSmall ? 140 : 160} // Conditionally set height
//           className="object-contain"
//         />
//       </div>
//       <h3 className="text-pink-600 font-semibold text-lg mb-2">{title}</h3>
//       <div className="flex justify-center mb-4">
//         <span className="w-5 h-[0.4rem] bg-[#FB2E86] rounded-full mx-1"></span>
//         <span className="w-5 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-5 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//       </div>
//       <p className="text-sm text-gray-600 mb-2">Code - {code}</p>
//       <p className="text-base font-light text-gray-800">${price}</p>
//     </div>
//   );
// };

// const FeaturedProducts: FC = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto py-10 px-5">
//       <h2 className="text-[2.35rem] leading-[2.35rem] font-bold text-center text-[#1A0B5B] mb-8 mt-[4.4rem] flex place-content-center">Featured Products</h2>
      
//       <div className="flex place-content-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-1.3rem] mx-auto">
//           {/* Add isSmall prop to make the first 3 cards smaller */}
//           <ProductCard
//             imageSrc="/images/image 1168.png"
//             title="Cantilever chair"
//             code="Y523201"
//             price="42.00"
//             isSmall={true} // Make the image smaller
//           />
//           <ProductCard
//             imageSrc="/images/image 1.png"
//             title="Cantilever chair"
//             code="Y523201"
//             price="42.00"
//             isSmall={true} // Make the image smaller
//           />
//           <ProductCard
//             imageSrc="/images/image 1169.png"
//             title="Cantilever chair"
//             code="Y523201"
//             price="42.00"
//             isSmall={true} // Make the image smaller
//           />
//           {/* 4th card remains large */}
//           <ProductCard
//             imageSrc="/images/image 3.png"
//             title="Cantilever chair"
//             code="Y523201"
//             price="42.00"
//             isLarge={true} // Keep this card large
//           />
//         </div>
//       </div>

//       <div className="flex justify-center mt-[5.5em]">
//         <span className="w-8 h-[0.4rem] bg-[#FB2E86] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//       </div>

//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default FeaturedProducts;








// import Image from "next/image";
// import { FC } from "react";

// interface ProductCardProps {
//   imageSrc: string;
//   title: string;
//   code: string;
//   price: string;
// }

// const ProductCard: FC<ProductCardProps> = ({
//   imageSrc,
//   title,
//   code,
//   price,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-xl mx-auto p-4 flex flex-col items-center relative w-[270px] h-[361px]">
//       <div className="bg-gray-100 w-[17rem] h-[13rem] flex justify-center items-center  mb-4">
//         <Image src={imageSrc} alt={title} width={128} height={128} className="object-contain" />
//       </div>
//       <h3 className="text-pink-600 font-semibold text-lg mb-2">{title}</h3>
//       <p className="text-sm text-gray-600 mb-2">Code - {code}</p>
//       <p className="text-lg font-normal text-gray-800">${price}</p>
//     </div>
//   );
// };

// const FeaturedProducts: FC = () => {
//   const products = [
//     {
//       imageSrc: "/images/image 1168.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//     {
//       imageSrc: "/images/image 1.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//     {
//       imageSrc: "/images/image 1169.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//     {
//       imageSrc: "/images/image 3.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto py-10 px-5">
//       <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Featured Products</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <ProductCard
//             key={index}
//             imageSrc={product.imageSrc}
//             title={product.title}
//             code={product.code}
//             price={product.price}
//           />
//         ))}
//       </div>

//       <div className="flex justify-center mt-[5.5em]">
//         <span className="w-8 h-[0.4rem] bg-[#FB2E86] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//       </div>


//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default FeaturedProducts;



















// import Image from "next/image";
// import { FC } from "react";

// interface ProductCardProps {
//   imageSrc: string;
//   title: string;
//   code: string;
//   price: string;
//   onAddToCart?: () => void;
//   onFavorite?: () => void;
//   onViewDetails?: () => void;
// }

// const ProductCard: FC<ProductCardProps> = ({
//   imageSrc,
//   title,
//   code,
//   price,
//   onAddToCart,
//   onFavorite,
//   onViewDetails,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center relative">
//       <div className="absolute top-4 right-4 flex gap-2">
//         {onAddToCart && (
//           <button onClick={onAddToCart} className="text-blue-500 hover:text-blue-600">
//             <i className="fas fa-shopping-cart"></i>
//           </button>
//         )}
//         {onFavorite && (
//           <button onClick={onFavorite} className="text-pink-500 hover:text-pink-600">
//             <i className="fas fa-heart"></i>
//           </button>
//         )}
//         {onViewDetails && (
//           <button onClick={onViewDetails} className="text-green-500 hover:text-green-600">
//             <i className="fas fa-search"></i>
//           </button>
//         )}
//       </div>
//       <Image src={imageSrc} alt={title} width={128} height={128} className="object-contain mb-4" />
//       <h3 className="text-pink-600 font-semibold text-lg mb-2">{title}</h3>
//       <p className="text-sm text-gray-600 mb-2">Code - {code}</p>
//       <p className="text-lg font-bold text-gray-800">${price}</p>
//     </div>
//   );
// };

// const FeaturedProducts: FC = () => {
//   const products = [
//     {
//       imageSrc: "/images/image 1168.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//     {
//       imageSrc: "/images/image 1169.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//     {
//       imageSrc: "/images/image 1.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//     {
//       imageSrc: "/images/image 3.png",
//       title: "Cantilever chair",
//       code: "Y523201",
//       price: "42.00",
//     },
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto py-10 px-5">
//       <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Featured Products</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <ProductCard
//             key={index}
//             imageSrc={product.imageSrc}
//             title={product.title}
//             code={product.code}
//             price={product.price}
//           />
//         ))}
//       </div>

//       <div className="flex justify-center mt-[5.5em]">
//         <span className="w-8 h-[0.4rem] bg-[#FB2E86] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//         <span className="w-8 h-[0.4rem] bg-[#FEBAD7] rounded-full mx-1"></span>
//       </div>
    
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     <br />
//     </div>

//   );
// };

// export default FeaturedProducts;
