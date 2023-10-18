import * as React from "react";
import * as ReactDOM from "react-dom/client";
import DynamicApp from './App';
import reportWebVitals from './reportWebVitals';
import Chantelle from './Chantelle.js';
import ChantelleProductDetails from './Chantelleproductdetails';
import Shaal from './Shaal.js';
import Unstiched from './Unstiched.js';

import Productdetails from './unstichedProductDetails';
import  ShaalProductDetails from './shaalProductDetails.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './CartProvider'; // Import CartProvider
// import WeatherApp from './Weather-app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DynamicApp/>,
  },
 
  {
    path: "chantelle",
    element: <Chantelle/>,
  },
  {
    path: "unstiched",
    element: <Unstiched/>,
  },
 
  {
    path: "shaal",
    element: <Shaal/>,
  },
  {
    path: "unstiched/product",
    element: <Productdetails/>,
  },
  {
    path: "/shaal/shaalProductDetails",
    element: < ShaalProductDetails/>,
  },
  {
    path: "/chantelle/chantelleProductDetails",
    element: < ChantelleProductDetails/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the entire app in the CartProvider */}
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>

  // <WeatherApp/>
);

console.log('hello')

reportWebVitals();
