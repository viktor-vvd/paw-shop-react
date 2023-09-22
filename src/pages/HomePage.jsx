import React from "react";
import Banner from "@components/Home/Banner";
import Promo from "@components/Home/Promo";
import PopularProducts from "@components/Home/PopularProducts";
import Reviews from "@components/Home/Reviews";
import About from "@components/Home/About";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Promo />
      <PopularProducts />
      <Reviews />
      <About />
    </>
  );
};

export default HomePage;
