import Footer from "components/base/Footer";
import Header from "components/base/Header/Header";
import AuthModal from "components/modals/AuthModal/AuthModal";
import CartModal from "components/modals/CartModal/CartModal";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="main container-vertical">
        <Outlet />
      </main>
      <Footer />
      {/* modals */}
      <AuthModal />
      <CartModal />
    </>
  );
};

export default DefaultLayout;
