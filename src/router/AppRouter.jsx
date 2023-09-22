import DefaultLayout from "layouts/DefaultLayout";
import CatalogPage from "pages/CatalogPage";
import HomePage from "pages/HomePage";
import ProductPage from "pages/ProductPage";
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
      <Route index element={<HomePage />} />
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
        <Route index element={<CatalogPage />} />
        <Route
          path="product/:id"
          element={<ProductPage />}
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
