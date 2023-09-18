import Footer from "components/base/Footer";
import Header from "components/base/Header/Header";
import AuthModal from "components/modals/AuthModal/AuthModal";
import CartModal from "components/modals/CartModal/CartModal";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main className="main container-vertical">

      <Header />
      <Outlet />
      <Footer />
      {/* modals */}
      <AuthModal />
      <CartModal />
    </main>
  );
};

export default DefaultLayout;
