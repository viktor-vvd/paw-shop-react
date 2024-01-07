import Header from "components/base/Header/Header";
import CartModal from "components/modals/CartModal/CartModal";
import React from "react";
import { Outlet } from "react-router-dom";

const CheckoutLayout = () => {
  return (
    <>
      <Header isCheckout={true} />
      <main className="container-vertical main container page-container">
        <Outlet />
      </main>
      <footer
        className="container-vertical footer footer_bottom"
        style={{ background: "#fff" }}
      >
        <div className="container-horizontal footer__payment-copyright__wrapper">
          <span className="text">
            Copyright © 2022. All Rights Reserved by SleepGo
          </span>
        </div>
      </footer>
      {/* modals */}
      {/* <AuthModal /> */}
      <CartModal buttons={false} />
    </>
  );
};

export default CheckoutLayout;
