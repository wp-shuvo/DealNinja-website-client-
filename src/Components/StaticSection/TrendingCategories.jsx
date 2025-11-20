import React from 'react';

const TrendingCategories = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="mx-auto p-4 md:px-16 md:py-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore <span className="text-purple-600">Trending Categories</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              className="w-full h-72 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Laptops</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-72 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Smart Watches</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              className="w-full h-72 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">Cameras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
