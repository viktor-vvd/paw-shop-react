import CheckoutLayout from "layouts/CheckoutLayout";
import DefaultLayout from "layouts/DefaultLayout";
import CatalogPage from "pages/CatalogPage";
import CheckoutPage from "pages/CheckoutPage";
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
    <>
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
          path="catalog/:slug"
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
            path="product/:slug"
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
      <Route
        path="/checkout/"
        errorElement={<ErrorPage />}
        element={<CheckoutLayout />}
        handle={{
          crumb: () => ({ name: "Checkout", path: "/checkout/" }),
        }}
      >
        <Route index element={<CheckoutPage />} errorElement={<ErrorPage />} />
        </Route>
    </>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
