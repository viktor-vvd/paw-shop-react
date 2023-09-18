import Footer from "components/base/Footer";
import Header from "components/base/Header/Header";
import AuthModal from "components/modals/AuthModal/AuthModal";
import CartModal from "components/modals/CartModal/CartModal";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* modals */}
      <AuthModal />
      <CartModal />
    </>
  );
};

export default DefaultLayout;
