import React from 'react';
import { useLoaderData, Link } from 'react-router';

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const {
    title,
    price_min,
    price_max,
    email,
    category,
    created_at,
    image,
    status,
    location,
    seller_image,
    seller_name,
    condition,
    usage,
    description,
    seller_contact,
  } = product;

  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          to="/allproducts"
          className="text-gray-600 hover:text-black flex items-center gap-1 mb-4"
        >
          <span className="text-lg">←</span> Back To Products
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Image */}
          <div className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-sm">
            <img
              src={image}
              alt={title}
              className="w-full max-h-[400px] object-cover rounded-xl"
            />
          </div>

          {/* Right - Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>

            {/* Category */}
            <span className="inline-block text-xs bg-purple-100 text-purple-700 font-medium px-3 py-1 rounded-full mb-3">
              {category}
            </span>

            {/* Price */}
            <div className="bg-green-50 border border-green-100 rounded-xl px-5 py-3 mb-4">
              <p className="text-green-600 font-semibold text-lg">
                ${price_min} - {price_max}
              </p>
              <p className="text-gray-500 text-sm">Price starts from</p>
            </div>

            {/* Product Details */}
            <div className="bg-white p-4 rounded-xl shadow-sm border mb-4">
              <h2 className="text-lg font-semibold mb-3">Product Details</h2>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Product ID:</span>{' '}
                {product._id || 'N/A'}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Posted:</span> {formattedDate}
              </p>
            </div>

            {/* Seller Info */}
            <div className="bg-white p-4 rounded-xl shadow-sm border mb-4">
              <h2 className="text-lg font-semibold mb-3">Seller Information</h2>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={seller_image}
                  alt={seller_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{seller_name}</p>
                  <p className="text-sm text-gray-600">{email}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700">
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Contact:</span> {seller_contact}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Status:</span>{' '}
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  {status}
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              I Want Buy This Product
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-3">Product Description</h2>
          <div className="flex flex-wrap justify-between mb-3 text-sm">
            <p>
              <span className="font-semibold text-gray-800">Condition:</span>{' '}
              <span className="text-blue-600 capitalize">{condition}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-800">Usage Time:</span>{' '}
              <span className="text-purple-600 capitalize">{usage}</span>
            </p>
          </div>

          <hr className="border-gray-200 my-3" />
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
