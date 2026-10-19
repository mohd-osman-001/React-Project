import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./src/AppLayout";
import About from "./src/components/About.js";
import Body from "./src/components/Body.js";
import Cart from "./src/components/Cart.js";
import ErrorPage from "./src/components/ErrorPage.js";

import Contact from "./src/components/Contact.js";
import RestaurantMenuPage from "./src/components/RestaurantMenuPage.js";

// import Grocery from "./src/components/Grocery.js"

import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./src/components/Grocery.js"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/menu/:restaurantId",
        element: <RestaurantMenuPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback="Grocery Loading...">
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
