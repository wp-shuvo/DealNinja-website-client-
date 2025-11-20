import React, { use } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router';

const LatestProducts = ({ LatestProductsPromise }) => {
  const products = use(LatestProductsPromise);
  console.log(products);
  return (
    <div className="p-4 md:px-16 md:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
        Recent
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          {' '}
          Products{' '}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 ">
        {products?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/allproducts"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          All Products
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
