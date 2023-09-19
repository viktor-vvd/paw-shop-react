import DefaultLayout from "layouts/DefaultLayout";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import Product from "pages/Product";
import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<DefaultLayout />}
      handle={{
        crumb: () => ({ name: "Main", path: "/" }),
      }}
    >
      <Route index element={<Home />} />
      <Route
        path="catalog"
        element={<Outlet />}
        handle={{
          crumb: () => ({ name: "Catalog", path: "/catalog" }),
        }}
      >
        <Route index element={<Catalog />} />
        <Route
          path="product/:id"
          element={<Product />}
          handle={{
            crumb: () => 
              ({ name: "Product", path: "/product" })
          }}
        />
      </Route>
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
