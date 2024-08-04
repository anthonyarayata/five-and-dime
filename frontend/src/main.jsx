// main.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import StorePage from './pages/StorePage';
import Payment from './pages/Payment';
import Shipping from './pages/Shipping';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'store',
        element: <StorePage />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
      {
        path: 'shipping',
        element: <Shipping />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
