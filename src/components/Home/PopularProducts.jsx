import React from "react";
import ProductCard from "@components/base/ProductCard";

const PopularProducts = ({images=null}) => {
  const data = [
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      rate: 5,
      reviews: 2,
      discount: 0,
      price: 4,
      new: false,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      rate: 5,
      reviews: 5,
      discount: 50,
      price: 10,
      new: false,
    },
    {
      id: 2,
      image: images["product3"],
      name: "Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 8.5,
      new: true,
    },
    {
      id: 3,
      image: images["product4"],
      name: "Frisco Bird Teaser with Feathers Cat Toy",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 3.42,
      new: false,
    },
  ];

  return (
    <section className="container-vertical outer__container section-popular">
      <div className="container-vertical container section-popular__container">
        <h2 className="title">Popular products</h2>
        <div className="container-horisontal populars">

        {data &&
          data.map((item, index) => (
            <ProductCard images={images} item={item} key={index} />
          ))}         
        </div>
      </div>
      <div className="container-horisontal for-cat-dog__container">
        <div className="container-horisontal for-cat-dog__button for-cat-dog__button_cat">
          <span className="text__button">
            Products for <span className="text__button cat">CAT</span>
          </span>
          <img
            className="for-cat-dog__button__icon"
            src={images["catIcon"]}
            alt="cat"
          />
          <img
            className="button__icon_arrow button__icon_arrow_right"
            src={images["topRightArrow"]}
            alt="arrow"
          />
        </div>
        <div className="container-horisontal for-cat-dog__button for-cat-dog__button_dog">
          <span className="text__button">
            Products for <span className="text__button dog">DOG</span>
          </span>
          <img src={images["dogIcon"]} alt="arrow" />
          <img
            className="button__icon_arrow button__icon_arrow_right"
            src={images["topRightArrow"]}
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
