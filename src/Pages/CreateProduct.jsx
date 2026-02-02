import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const CreateProduct = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="max-w-3xl w-full">
        {/* Back Link */}
        <Link
          to="/products"
          className="text-gray-600 text-sm font-bold flex items-center mb-6"
        >
          ← Back To Products
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-10">
          Create <span className="text-purple-600">A Product</span>
        </h1>

        {/* Main Card */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-300">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="text-sm font-bold text-gray-600">Title</label>
              <input
                type="text"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Category
              </label>
              <select
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              >
                <option value="">Select a Category</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="appliances">Appliances</option>
                <option value="fashion">Fashion</option>
                <option value="office">Office</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Min Price You want to Sale ($)
              </label>
              <input
                type="number"
                placeholder="e.g. 18.5"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Max Price You want to Sale ($)
              </label>
              <input
                type="number"
                placeholder="Optional (default = Min Price)"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Condition */}
            <div>
              <label className="text-sm font-bold text-gray-600 mb-1 block">
                Product Condition
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="condition" defaultChecked />
                  Fresh
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="condition" />
                  Used
                </label>
              </div>
            </div>

            {/* Usage Time */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Product Usage time
              </label>
              <input
                type="text"
                placeholder="e.g. 1 year 3 month"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Product Image URL */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-gray-600">
                Your Product Image URL
              </label>
              <input
                type="text"
                placeholder="https://..."
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Seller Name */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Seller Name
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                required
                readOnly
                placeholder="e.g. Artisan Roasters"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Seller Email */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Seller Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                required
                readOnly
                placeholder="example@email.com"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Seller Contact */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Seller Contact
              </label>
              <input
                type="text"
                required
                placeholder="e.g. +1-555-1234"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Seller Image URL */}
            <div>
              <label className="text-sm font-bold text-gray-600">
                Seller Image URL
              </label>
              <input
                type="text"
                defaultValue={user?.photoURL}
                required
                readOnly
                placeholder="https://..."
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-gray-600">
                Location
              </label>
              <input
                type="text"
                placeholder="City, Country"
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-gray-600">
                Simple Description about your Product
              </label>
              <textarea
                rows="4"
                placeholder="e.g. I bought this product 3 month ago..."
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 mt-1 
                focus:outline-none focus:ring-2 focus:ring-purple-500 caret-gray-300"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                className="w-full py-3 mt-4 text-white font-semibold rounded-lg 
                bg-gradient-to-r from-purple-500 to-purple-700"
              >
                Create A Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
