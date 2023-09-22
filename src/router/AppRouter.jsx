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
        path="catalog/:id"
        element={<Outlet />}
        handle={{
          crumb: (data) => ({
            name: "Catalog",
            path: `${data?.path}`,
          }),
        }}
      >
        <Route index element={<Catalog />} />
        <Route
          path="product/:id"
          element={<Product />}
          handle={{
            crumb: (data) => ({
              name: data?.name,
              path: `${data?.path}`,
            }),
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
