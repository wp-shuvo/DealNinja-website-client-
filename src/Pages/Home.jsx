import React from 'react';
import HeroSection from '../Components/Header/HeroSection';
import LatestProducts from '../Components/Products/LatestProducts';
import Testimonials from '../Components/StaticSection/Testimonials';
import TrendingCategories from '../Components/StaticSection/TrendingCategories';
import WhyDealNinja from '../Components/StaticSection/WhyDealNinja';

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
      <Testimonials />
      <TrendingCategories />
      <WhyDealNinja />
    </div>
  );
};

export default Home;
