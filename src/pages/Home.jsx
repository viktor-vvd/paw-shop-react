import React from "react";
import Banner from "@components/Home/Banner";
import Promo from "@components/Home/Promo";
import PopularProducts from "@components/Home/PopularProducts";
import Reviews from "@components/Home/Reviews";
import About from "@components/Home/About";

const Home = ({ images = null }) => {
  return (
    <main className="main container-vertical">
      <Banner images={images} />
      <Promo images={images} />
      <PopularProducts images={images} />
      <Reviews images={images} />
      <About images={images} />
    </main>
  );
};

export default Home;
