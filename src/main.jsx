import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//-------------------------------------------------------------------------//
import './index.css';
import App from './App.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ErrorRouter from './pages/ErrorRouter.jsx';
//-------------------------------------------------------------------------//
const router = createBrowserRouter ([{
    path: '/',
    element: <App />,
    errorElement: <ErrorRouter />,
    children: [{
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);
//-------------------------------------------------------------------------//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
