import React from "react";
import Banner from "@components/Home/Banner";
import Promo from "@components/Home/Promo";
import PopularProducts from "@components/Home/PopularProducts";
import Reviews from "@components/Home/Reviews";
import About from "@components/Home/About";
import AuthModal from "components/modals/AuthModal/AuthModal";

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
    </main>
  );
};

export default Home;
