import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider,createBrowserRouter } from "react-router-dom";  

// import ComponentExample from './ComponentExample';
import MainRoutes from './CommonComponent/Mainroutes';
// import ComponentExample from './CommonComponent/Headerfile.jsx'; 
// import Headerfile from './CommonComponent/Headerfile.jsx';

// import MainRoutes from './Mainroutes.jsx';
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <div>Hello World!</div>,
  //   },
  //   {
  //     path: "about",
  //     element: <div>About us page !</div>,
  //   },
  // ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={MainRoutes} />
    {/* <RouterProvider router={router} /> */}

    {/* <RouterProvider router={router} /> */}
    {/* <Headerfile/>
    <ComponentExample /> */}
  </>
);
