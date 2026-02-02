import React from 'react';

const MyProducts = () => {
  return (
    <div className="p-4 md:px-16 md:py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        {' '}
        My <span className="text-[#9F62F2]">Products</span> :{' '}
        <span className="bg-[#9F62F2] text-transparent bg-clip-text">{}</span>
      </h2>
    </div>
  );
};

export default MyProducts;
