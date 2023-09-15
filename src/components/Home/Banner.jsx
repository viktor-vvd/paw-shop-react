import React from "react";
import images from "@imports/ImagesImport";
import Image from "components/base/Image";

const Banner = () => {
  return (
    <section className="container-vertical banner ">
      {/* <div className="container-horisontal background">
        <Image
          className="background__pattern"
          src={images["bg1"]}
          loading="lazy" alt="pattern"
        />
        <Image
          className="background__pattern"
          src={images["bg2"]}
          loading="lazy" alt="pattern"
        />
      </div> */}
      <Image
        className="cat-image"
        src={images["cat"]}
        alt="cat"
        width="652"
        height="689"
      />
      <Image
        className="dog-image"
        src={images["dog"]}
        alt="dog"
        width="786"
        height="798"
      />
      <div className="container-vertical container outer__container banner__middle-container">
        <div className="container-vertical banner__headline">
          <Image
            className="headline__image headline__image_ball"
            src={images["ball"]}
            loading="lazy" alt="ball"
            width="188"
            height="188"
          />
          <Image
            className="headline__image headline__image_bone"
            src={images["bone"]}
            loading="lazy" alt="bone"
            width="360"
            height="329"
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
            <Image
              className="button__icon_arrow"
              src={images["topLeftArrow"]}
              loading="lazy" alt="arrow"
              width="10"
              height="10"
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
            <Image
              className="button__icon_arrow button__icon_arrow_right"
              src={images["topRightArrow"]}
              loading="lazy" alt="arrow"
              width="10"
              height="10"
            />
          </button>
        </div>
      </div>
      <ul className="container-horisontal benefits">
        <li className="container-horisontal benefits__item">
          <Image
            className="benefits__item__icon"
            src={images["star"]}
            loading="lazy" alt="star"
            width="30"
            height="30"
          />
          <span className="text">
            <b>Unique</b> products
          </span>
        </li>
        <li className="container-horisontal benefits__item">
          <Image
            className="benefits__item__icon"
            src={images["support"]}
            loading="lazy" alt="support"
            width="30"
            height="30"
          />
          <span className="text">
            <b>24/7</b> support
          </span>
        </li>
        <li className="container-horisontal benefits__item">
          <Image
            className="benefits__item__icon"
            src={images["returnIcon"]}
            loading="lazy" alt="return"
            width="30"
            height="30"
          />
          <span className="text">
            <b>Free return</b> within 15 days
          </span>
        </li>
        <li className="container-horisontal benefits__item">
          <Image
            className="benefits__item__icon"
            src={images["checkmark"]}
            loading="lazy" alt="checkmark"
            width="30"
            height="30"
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
