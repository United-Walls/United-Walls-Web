import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './Screens/AboutUs';
import Contact from './Screens/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App activeScreenIndex="Home"/>
  },
  {
    path: "aboutUs",
    element: <AboutUs />
  },
  {
    path: "contact",
    element: <Contact />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
