import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const { _id, title, image, price_min, price_max } = product;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="w-full h-[350px] bg-gray-200 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-gray-900 font-medium text-lg line-clamp-2">
          {title}
        </h2>
        <p className="text-purple-600 font-semibold mt-2">
          ${price_min} - {price_max}
        </p>

        <div className="mt-3">
          <Link
            to={`/productdetails/${_id}`}
            className="block w-full text-center text-purple-600 font-medium border border-purple-500 rounded-md py-2 hover:bg-purple-600 hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
