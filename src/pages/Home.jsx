import React from "react";
import Banner from "@components/Home/Banner";
import Promo from "@components/Home/Promo";
import PopularProducts from "@components/Home/PopularProducts";
import Reviews from "@components/Home/Reviews";
import About from "@components/Home/About";
import AuthModal from "components/modals/AuthModal/AuthModal";
import CartModal from "components/modals/CartModal/CartModal";

const Home = () => {
  return (
    <main className="main container-vertical">
      <Banner />
      <Promo />
      <PopularProducts />
      <Reviews />
      <About />
      {/* modals */}
      <AuthModal />
      <CartModal/>
    </main>
  );
};

export default Home;
