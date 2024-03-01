import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainPage } from "./pages/Main/MainPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout.jsx";
import { ProductsPage } from "./pages/Products/ProductsPage.jsx";
import { CartProvider } from "./context/cart.context.jsx";

const router = createBrowserRouter([
  {
    element: (
      <CartProvider>
        <BaseLayout />
      </CartProvider>
    ),
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      { path: "/categories/:type", element: <ProductsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
