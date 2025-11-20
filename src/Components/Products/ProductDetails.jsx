import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import swal from 'sweetalert';

const ProductDetails = () => {
  const product = useLoaderData();
  const [bids, setBids] = useState([]);
  console.log('product data ', product);

  const {
    title: productTitle,
    price_min,
    price_max,
    email: sellerEmail,
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
    _id: productID,
  } = product;

  useEffect(() => {
    fetch(`http://localhost:5001/product/bids/${productID}`)
      .then(res => res.json())
      .then(data => {
        console.log('bids data==>', data);
        setBids(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [productID]);

  const { user } = use(AuthContext);
  console.log('user info', user);

  const bidsMordelRef = useRef(null);
  const formattedDate = new Date(created_at).toLocaleDateString();

  const handleBidsMordalOpen = () => {
    bidsMordelRef.current.showModal();
  };
  const handleBidsSubmit = e => {
    e.preventDefault();
    const name = e.target.buyer_name.value;
    const email = e.target.buyer_email.value;
    const bid = e.target.bid_price.value;

    console.log(productID, name, email, bid);

    const newBid = {
      product: productID,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid: bid,
      seller_image,
      seller_name,
      productTitle,
      sellerEmail,
      product_image: image,
      product_category: category,
      status: 'pending',
    };

    fetch('http://localhost:5001/bids', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newBid),
    })
      .then(res => res.json())
      .then(data => {
        // console.log('after place the bid data', data);
        if (data.insertedId) {
          e.target.reset();
          bidsMordelRef.current.close();
          swal({
            title: 'Success!',
            text: 'Your bid has been placed successfully!',
            icon: 'success',
            button: 'OK',
          });
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid - a.bid);
          setBids(newBids);
        }
      })
      .catch(error => console.log(error.message));
  };
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
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
              alt={productTitle}
              className="w-full max-h-[400px] object-cover rounded-xl"
            />
          </div>

          {/* Right - Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {productTitle}
            </h1>

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
                  <p className="text-sm text-gray-600">{sellerEmail}</p>
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
            <div>
              <button
                onClick={handleBidsMordalOpen}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                I Want Buy This Product
              </button>
              {/* mordel bids */}
              <dialog
                ref={bidsMordelRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="text-xl font-semibold text-center mb-6">
                    Give Seller Your Offered Price
                  </h3>

                  <form
                    onSubmit={handleBidsSubmit}
                    method="dialog"
                    className="space-y-4"
                  >
                    {/* Buyer Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Buyer Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.displayName}
                          required
                          name="buyer_name"
                          placeholder="Your name"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Buyer Email
                        </label>
                        <input
                          type="email"
                          defaultValue={user?.email}
                          required
                          name="buyer_email"
                          placeholder="Your Email"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>

                    {/* Buyer Image URL */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Buyer Image URL
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.photoURL}
                        readOnly
                        name="buyer_image"
                        placeholder="Your Image URL"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Place Your bid Price */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Place your Price
                      </label>
                      <input
                        type="text"
                        name="bid_price"
                        required
                        placeholder="e.g. Artisan Roasters"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Contact Info */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Contact Info
                      </label>
                      <input
                        type="text"
                        name="buyer_contact"
                        placeholder="e.g. +1-555-1234"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => bidsMordelRef.current.close()}
                        className="btn btn-outline btn-sm px-6 w-1/2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm w-1/2 px-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none"
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
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
      {/* place the product bids */}
      <div className="max-w-7xl mx-auto my-7">
        <h2 className="text-2xl md:text-4xl font-bold mb-5">
          {' '}
          Bids For This Products:{' '}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            {bids.length}
          </span>
        </h2>

        {/* bids data table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="">
                      <div className="font-bold">{bid.buyer_name}</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{bid.buyer_email}</div>
                  </td>
                  <td>
                    <div className="font-bold">$ {bid.bid}</div>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
