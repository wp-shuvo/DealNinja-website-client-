import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import GoogleLogo from '../../assets/icon-google.png';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
  const {
    createUser,
    singInWithGoogle,
    errorInvalid,
    setErrorInvalid,
    setUser,
  } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  // register user
  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoURL = event.target.imageUrl.value;
    const password = event.target.password.value;

    console.log(name, photoURL);

    if (password.length < 6) {
      setErrorInvalid('Password at least 6 carecter');
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    if (!passwordRegex.test(password)) {
      setErrorInvalid(
        'Password at least one Upparcase Letter , one LowerCase Letter '
      );
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setErrorInvalid('');
        const newUser = {
          name: name,
          email: email,
          image: photoURL,
        };
        // create User in the database
        fetch('http://localhost:5001/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then(res => res.json())
          .then(data => {
            console.log('data after user save', data);
          })
          .catch(error => {
            console.log(error.message);
          });
        toast.success('✅ Account created successfully!');
        setUser({
          ...result.user,
          displayName: name,
          photoURL: photoURL,
        });
        event.target.reset();
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // singin with google

  const handleGoogleSignup = () => {
    singInWithGoogle()
      .then(result => {
        toast('✅ login successfully!');
        console.log(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        // create User in the database
        fetch('http://localhost:5001/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
          .then(res => res.json())
          .then(data => {
            console.log('data after user save', data);
          })
          .catch(error => {
            console.log(error.message);
          });
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Register Now!
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-[#9F62F2] font-medium hover:underline"
          >
            Login Now
          </Link>
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
              required
            />
          </div>

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
              Image-URL
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter your profile image URL"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
        <h1 className="my-2 text-red-600 text-center">{errorInvalid} </h1>

        <div className="flex items-center my-5">
          <hr className="border-gray-300 w-[45%]" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <hr className="border-gray-300 w-[45%]" />
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <img src={GoogleLogo} alt="google" className="w-5 h-5" />
          <span className="text-gray-700 font-medium">Sign Up With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
