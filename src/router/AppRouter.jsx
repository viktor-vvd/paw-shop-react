import DefaultLayout from "layouts/DefaultLayout";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import React from "react";
import {
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
        crumb: ()=>({name:"Main", path:"/"}),
      }}
    >
      <Route path="/" element={<Home />} />
      <Route
        path="catalog"
        element={<Catalog />}
        handle={{
          crumb: ()=>({name:"Catalog", path:"/catalog"}),
        }}
      />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
