import React from 'react';
import { Link } from 'react-router';
import { FiSearch } from 'react-icons/fi';
import leftSideImage from '../../assets/bg-hero-left.png';
import rightSideImage from '../../assets/bg-hero-right.png';

const HeroSection = () => {
  return (
    <div className=" relative overflow-hidden bg-gradient-to-r from-[#FCE7FF] via-[#F4E6FF] to-[#E8F1FF] min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <img
        src={leftSideImage}
        alt="left vector"
        className="absolute left-0 bottom-0 w-40 sm:w-60 md:w-72 opacity-60 pointer-events-none"
      />
      <img
        src={rightSideImage}
        alt="right vector"
        className="absolute right-0 top-0 w-40 sm:w-60 md:w-72 opacity-60 pointer-events-none"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
        Deal Your{' '}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Products
        </span>{' '}
        <br className="hidden sm:block" />
        In A{' '}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Smart
        </span>{' '}
        Way!
      </h1>

      <p className="text-gray-500 mt-4 max-w-2xl text-sm sm:text-base">
        DealNinja helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>

      <div className="mt-8 flex items-center w-full max-w-md bg-white shadow-md rounded-full overflow-hidden border border-gray-100">
        <input
          type="text"
          placeholder="search For Products, Categories..."
          className="flex-grow px-5 py-3 text-gray-700 text-sm sm:text-base focus:outline-none"
        />
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 text-white rounded-r-full">
          <FiSearch size={20} />
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <Link
          to="/allproducts"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          Watch All Products
        </Link>
        <Link
          to="/createproduct"
          className="border border-[#9F62F2] text-[#9F62F2] font-semibold px-6 py-2 rounded-md hover:bg-[#9F62F2] hover:text-white transition"
        >
          Post a Product
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
