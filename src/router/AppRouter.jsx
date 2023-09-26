import DefaultLayout from "layouts/DefaultLayout";
import CatalogPage from "pages/CatalogPage";
import ErrorPage from "pages/ErrorPage";
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
      errorElement={<ErrorPage />}
      element={<DefaultLayout />}
      handle={{
        crumb: () => ({ name: "Main", path: "/" }),
      }}
    >
      <Route index element={<HomePage />} errorElement={<ErrorPage />} />
      <Route
        path="catalog/:id"
        element={<Outlet />}
        handle={{
          crumb: (data) => ({
            name: "Catalog",
            path: `${data?.path}`,
          }),
        }}
        errorElement={<ErrorPage />}
      >
        <Route index element={<CatalogPage />} errorElement={<ErrorPage />} />
        <Route
          path="product/:id"
          element={<ProductPage />}
          handle={{
            crumb: (data) => ({
              name: data?.name,
              path: `${data?.path}`,
            }),
          }}
          errorElement={<ErrorPage />}
        />
      </Route>
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
