import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext);

  //SingOut Or LogOut user
  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        toast.success('sing-out succesful.');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  // navlinks
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-black'}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allproducts"
          className={({ isActive }) =>
            `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-black'}`
          }
        >
          All Products
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myproducts"
              className={({ isActive }) =>
                `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-black'}`
              }
            >
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mybids"
              className={({ isActive }) =>
                `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-black'}`
              }
            >
              My Bids
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/createproduct"
          className={({ isActive }) =>
            `font-semibold ${isActive ? 'text-[#9F62F2]' : 'text-black'}`
          }
        >
          Create Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-16 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 font-bold rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="font-extrabold text-xl cursor-pointer">
          Deal
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Ninja
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="relative flex flex-col items-center mr-3.5 group">
          {user && (
            <>
              <img
                className="h-10 w-10 rounded-full border-2 border-[#9F62F2] group-hover:scale-105 transition-transform duration-200"
                src={user?.photoURL}
                alt="Profile Picture"
              />
            </>
          )}
        </div>
        {user ? (
          <a
            onClick={handleSingOut}
            className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
          >
            LogOut
          </a>
        ) : (
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-[#9F62F2] text-[#9F62F2] font-semibold hover:bg-[#9F62F2] hover:text-white transition"
          >
            Login
          </Link>
        )}

        {/* <Link
          to="/register"
          className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
        >
          Register
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
