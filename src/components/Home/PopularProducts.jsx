import React from "react";
import ProductCard from "@components/base/ProductCard";
import { useCatalogListGETQuery } from "api/catalogApi";
import { Link } from "react-router-dom";
import Preloader from "components/base/Preloader";
import { CatIcon, DogIcon, TopRightArrow } from "public/svgComponents";

const PopularProducts = ({
  title = "Popular products",
  buttons = true,
  className = null,
}) => {
  const { data, isFetching } = useCatalogListGETQuery({
    per_page: 4,
    sort: "random",
  });

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
        <div className="container-horizontal populars">
          {isFetching && <Preloader className="preloader_absolute" />}
          {data?.data &&
            data.data.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
        </div>
      </div>
      {buttons && (
        <div className="container-horizontal for-cat-dog__container">
          <Link to="/catalog/cat?sort=default&order=desc&page=1">
            <div className="container-horizontal for-cat-dog__button for-cat-dog__button_cat">
              <span className="text__button">
                Products for <span className="text__button cat">CAT</span>
              </span>
              <CatIcon
                className="for-cat-dog__button__icon"
                loading="lazy"
                alt="cat"
                width="30"
                height="30"
              />
              <TopRightArrow
                className="button__icon_arrow button__icon_arrow_right"
                loading="lazy"
                alt="arrow"
                width="10"
                height="10"
              />
            </div>
          </Link>
          <Link to="/catalog/dog?sort=default&order=desc&page=1">
            <div className="container-horizontal for-cat-dog__button for-cat-dog__button_dog">
              <span className="text__button">
                Products for <span className="text__button dog">DOG</span>
              </span>
              <DogIcon
                className="for-cat-dog__button__icon"
                name="dogIcon"
                loading="lazy"
                alt="arrow"
                width="30"
                height="30"
              />
              <TopRightArrow
                className="button__icon_arrow button__icon_arrow_right"
                name="topRightArrow"
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
