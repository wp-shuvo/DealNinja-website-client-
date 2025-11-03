import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import GoogleLogo from '../../assets/icon-google.png';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const { singInuser, singInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    singInuser(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset();
        toast.success('✅ login successfully!');
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then(result => {
        toast('✅ login successfully!');
        console.log(result.user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Login
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Don’t have an account?{' '}
          <Link
            to="/register"
            className="text-[#9F62F2] font-medium hover:underline"
          >
            Register Now
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
              required
            />
          </div>
          <div className="text-right text-sm">
            <a href="#" className="text-[#9F62F2] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* signin Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-5">
          <hr className="border-gray-300 w-[45%]" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="border-gray-300 w-[45%]" />
        </div>

        {/* google login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <img src={GoogleLogo} alt="google" className="w-5 h-5" />
          <span className="text-gray-700 font-medium">Sign In With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
