import React from "react";
import images from "@imports/ImagesImport";
import ProductCard from "@components/base/ProductCard";
import Image from "components/base/Image";
import { useCatalogListGETQuery } from "api/catalogApi";
import { Link } from "react-router-dom";

const PopularProducts = ({
  title = "Popular products",
  buttons = true,
  className = null,
}) => {
  const { data } = useCatalogListGETQuery({ per_page: 4, sort: "random" });

  return (
    <section
      className={
        className
          ? "container-vertical outer__container section-popular " + className
          : "container-vertical outer__container section-popular"
      }
    >
      <div className="container-vertical container section-popular__container">
        <h2 className="title">{title}</h2>
        <div className="container-horisontal populars">
          {data?.data &&
            data.data.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
        </div>
      </div>
      {buttons && (
        <div className="container-horisontal for-cat-dog__container">
          <Link to="/catalog/cat">
            <div className="container-horisontal for-cat-dog__button for-cat-dog__button_cat">
              <span className="text__button">
                Products for <span className="text__button cat">CAT</span>
              </span>
              <Image
                className="for-cat-dog__button__icon"
                src={images["catIcon"]}
                loading="lazy"
                alt="cat"
                width="30"
                height="30"
              />
              <Image
                className="button__icon_arrow button__icon_arrow_right"
                src={images["topRightArrow"]}
                loading="lazy"
                alt="arrow"
                width="10"
                height="10"
              />
            </div>
          </Link>
          <Link to="/catalog/dog">
            <div className="container-horisontal for-cat-dog__button for-cat-dog__button_dog">
              <span className="text__button">
                Products for <span className="text__button dog">DOG</span>
              </span>
              <Image
                className="for-cat-dog__button__icon"
                src={images["dogIcon"]}
                loading="lazy"
                alt="arrow"
                width="30"
                height="30"
              />
              <Image
                className="button__icon_arrow button__icon_arrow_right"
                src={images["topRightArrow"]}
                loading="lazy"
                alt="arrow"
                width="10"
                height="10"
              />
            </div>
          </Link>
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
