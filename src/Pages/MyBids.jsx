import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5001/bids?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log('data from myBids', data);
          setBids(data);
        })
        .catch(error => console.log(error.message));
    }
  }, [user?.email]);

  const handleDeleteBid = _id => {
    // console.log('clicked');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/bids/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log('delete a bid', data);
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your bid has been deleted.',
                icon: 'success',
              });
            }
          });
        const remainingBids = bids.filter(bid => bid._id !== _id);
        setBids(remainingBids);
      }
    });
  };

  return (
    <div className="p-4 md:px-16 md:py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        {' '}
        My Bids :{' '}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          {bids.length}
        </span>
      </h2>

      {/* bids data table */}
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Product</th>
              <th>Seller Info</th>
              <th>Bid Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bids.map((bid, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                </td>
                <td>
                  <div className="font-bold">{bid.buyer_email}</div>
                </td>
                <td>
                  <div className="font-bold">$ {bid.bid}</div>
                </td>
                <th>
                  {bid.status === 'panding' ? (
                    <button className="btn btn-success">{bid.status}</button>
                  ) : (
                    <button className="btn btn-warning">{bid.status}</button>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteBid(bid._id)}
                    className="btn btn-outline btn-error"
                  >
                    Remove Bid
                  </button>
                </th>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
