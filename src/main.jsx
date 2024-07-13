import { createHashRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import './main.css';

import SpaceListings from './routes/SpaceListings';
import SpaceDetails from './routes/SpaceDetails';
import ComingSoon from './routes/ComingSoon';
import Register from './routes/Register';
import Checkout from './routes/Checkout';
import Login from './routes/Login';
import SpacePublishings from './routes/SpacePublishings';
import BookingHistory from './routes/BookingHistory';

const router = createHashRouter([
  {
    path: '/',
    element: <ComingSoon />
  },
  {
    path: '/explore',
    element: <SpaceListings />
  },
  {
    path: '/space',
    element: <SpaceDetails />
  },
  {
    path: '/publishing',
    element: <SpacePublishings />
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/auth/register',
    element: <Register />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/booking-history',
    element: <BookingHistory />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
