import Footer from "components/base/Footer";
import Header from "components/base/Header/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
