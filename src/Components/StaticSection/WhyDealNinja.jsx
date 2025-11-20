import React from 'react';
import 'animate.css';

const WhyDealNinja = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto p-4 md:px-16 md:py-8 text-center">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">
          Why Choose <span className="text-purple-600">DealNinja?</span>
        </h2>

        <p className="text-gray-600 mb-12 animate__animated animate__fadeInUp">
          Buy, sell, and discover the best products from trusted local sellers.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 shadow-lg rounded-xl border-2 border-purple-600  bg-gray-50 animate__animated animate__fadeInUp animate__delay-1s">
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891399.png"
              alt="Secure"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Buy and sell with confidence. Your transactions are safe.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl border-2 border-purple-600  bg-gray-50 animate__animated animate__fadeInUp animate__delay-2s">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
              alt="Support"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              We're here to help you anytime, anywhere.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl border-2 border-purple-600  bg-gray-50 animate__animated animate__fadeInUp animate__delay-3s">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Trusted"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Trusted Sellers</h3>
            <p className="text-gray-600">
              Verified sellers ensure you get quality products.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl border-2 border-purple-600  bg-gray-50 animate__animated animate__fadeInUp animate__delay-4s">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="Fast Delivery"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Receive products quickly with our optimized delivery system.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-gray-300" />
    </section>
  );
};

export default WhyDealNinja;
