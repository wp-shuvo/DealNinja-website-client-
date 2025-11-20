import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/Products/ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/products')
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);
  return (
    <div className="p-4 md:px-16 md:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
        All
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
    </div>
  );
};

export default AllProducts;
