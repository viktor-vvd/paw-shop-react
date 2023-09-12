import React from "react";
import images from "@imports/ImagesImport";

const Banner = () => {
  return (
    <section className="container-vertical banner ">
      {/* <div className="container-horisontal background">
        <img
          className="background__pattern"
          src={images["bg1"]}
          alt="pattern"
        />
        <img
          className="background__pattern"
          src={images["bg2"]}
          alt="pattern"
        />
      </div> */}
      <img className="cat-image" src={images["cat"]} alt="cat" />
      <img className="dog-image" src={images["dog"]} alt="dog" />
      <div className="container-vertical container outer__container banner__middle-container">
        <div className="container-vertical banner__headline">
          <img
            className="headline__image headline__image_ball"
            src={images["ball"]}
            alt="ball"
          />
          <img
            className="headline__image headline__image_bone"
            src={images["bone"]}
            alt="bone"
          />
          <span className="headline headline__text headline__text_dark">
            Make your pet’s life better
          </span>
          <h2 className="headline headline__text">
            Make your pet’s life better
          </h2>
        </div>
        <div className="container-horisontal banner__buttons">
          <button className="container-horisontal banner__button banner__button_cat">
            <img
              className="button__icon_arrow"
              src={images["topLeftArrow"]}
              alt="arrow"
            />
            <span className="text__button">
              For <span className="text__button cat">CAT</span>
            </span>
          </button>
          <span className="banner__subtitle">
            Toys and accessories that your pet will like
          </span>
          <button className="container-horisontal banner__button banner__button_dog">
            <span className="text__button">
              For <span className="text__button dog">DOG</span>
            </span>
            <img
              className="button__icon_arrow button__icon_arrow_right"
              src={images["topRightArrow"]}
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <ul className="container-horisontal benefits">
        <li className="container-horisontal benefits__item">
          <img
            className="benefits__item__icon"
            src={images["star"]}
            alt="star"
          />
          <span className="text">
            <b>Unique</b> products
          </span>
        </li>
        <li className="container-horisontal benefits__item">
          <img
            className="benefits__item__icon"
            src={images["support"]}
            alt="support"
          />
          <span className="text">
            <b>24/7</b> support
          </span>
        </li>
        <li className="container-horisontal benefits__item">
          <img
            className="benefits__item__icon"
            src={images["returnIcon"]}
            alt="return"
          />
          <span className="text">
            <b>Free return</b> within 15 days
          </span>
        </li>
        <li className="container-horisontal benefits__item">
          <img
            className="benefits__item__icon"
            src={images["checkmark"]}
            alt="checkmark"
          />
          <span className="text">
            <b>Happy</b> pet
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
