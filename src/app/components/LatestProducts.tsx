import React from "react";

const LatestProducts: React.FC = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  // Updated products array with unique images
  const products = [
    {
      name: "Comfort Handy Craft",
      price: 42.0,
      originalPrice: 65.0,
      sale: true,
      image: "/images/Component 9.png", 
    },
    {
      name: "Stylish Wooden Chair",
      price: 55.0,
      originalPrice: 80.0,
      sale: false,
      image: "/images/Leatest product.png", 
    },
    {
      name: "Modern Sofa Set",
      price: 120.0,
      originalPrice: 150.0,
      sale: true,
      image: "/images/Component 8.png", 
    },
    {
      name: "Elegant Dining Table",
      price: 300.0,
      originalPrice: 350.0,
      sale: true,
      image: "/images/Component 10.png",
    },
    {
      name: "Cozy Armchair",
      price: 75.0,
      originalPrice: 95.0,
      sale: false,
      image: "/images/Component 11.png", // Replace with actual image paths
    },
    {
      name: "Luxury Bed Frame",
      price: 450.0,
      originalPrice: 500.0,
      sale: true,
      image: "/images/Component 12.png", // Replace with actual image paths
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-[900px] ml-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              {/* Product Image */}
              <div className="w-full h-38 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                {product.sale && (
                  <span className="text-pink-500 text-sm font-medium">
                    Sale
                  </span>
                )}
                <p className="text-gray-500 line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </p>
                <p className="text-gray-800 font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
