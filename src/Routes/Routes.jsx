import React from 'react';
import { createBrowserRouter } from 'react-router';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home';
import AllProducts from '../Pages/AllProducts';
import MyProducts from '../Pages/MyProducts';
import CreateProduct from '../Pages/CreateProduct';
import Login from '../Components/LogIn_Out/Login';
import Register from '../Components/LogIn_Out/Register';
import MyBids from '../Pages/MyBids';
import PrivateRoutes from './PrivateRoutes';
import ProductDetails from '../Components/Products/ProductDetails';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: (
      <div className="w-full h-full flex justify-center mt-2.5">
        <span className="loading loading-dots content-center loading-xl"></span>
      </div>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: 'allproducts',
        element: <AllProducts />,
      },
      {
        path: 'myproducts',
        element: (
          <PrivateRoutes>
            <MyProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: 'mybids',
        element: (
          <PrivateRoutes>
            <MyBids />
          </PrivateRoutes>
        ),
      },
      {
        path: 'createproduct',
        element: (
          <PrivateRoutes>
            <CreateProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'productdetails/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5001/products/${params.id}`),
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
