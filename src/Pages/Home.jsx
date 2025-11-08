import React from 'react';
import HeroSection from '../Components/Header/HeroSection';
import LatestProducts from '../Components/Products/LatestProducts';

const LatestProductsPromise = fetch(
  'http://localhost:5001/latest-products'
).then(res => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="mt-[50px] ">
        <LatestProducts LatestProductsPromise={LatestProductsPromise} />
      </div>
    </div>
  );
};

export default Home;
