import React, { useEffect, useRef } from "react";
import images from "imports/ImagesImport";
import { register } from "swiper/element/bundle";

const Promo = () => {
  const swiperElRef = useRef(null);
  register();

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      pagination: true,
      loop: true,
      injectStyles: [
        `
              .swiper-pagination-bullets.swiper-pagination-horizontal {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 14rem;
                top: auto;
                bottom: 40rem;
                left: 50%;
                transform: translateX(-50%);
              }
              .swiper-pagination-bullet {
                width: 13rem;
                height: 13rem;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.30);
                cursor: pointer;
              }
              .swiper-pagination-bullet-active {
                background-color: white;
              }
          `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();

    const prev = document.getElementById("slider__button_prev");
    prev.addEventListener("click", () => {
      swiperContainer.swiper.slidePrev();
    });
    const next = document.getElementById("slider__button_next");
    next.addEventListener("click", () => {
      swiperContainer.swiper.slideNext();
    });
  }, []);
  return (
    <section className="container-horisontal section-promo">
      <img
        id="slider__button_prev"
        className="slider__button"
        src={images["leftbuttonarrow.png"]}
        alt="previous"
      />
      {/*         <div className="container promo__slider"> */}
      <swiper-container
        class="container promo__slider"
        init="false"
        ref={swiperElRef}
        slides-per-view="1"
      >
        <swiper-slide class="container">
          <img
            className="promo__slider__item PC"
            src={images["promoimgPC.png"]}
            alt="promo img"
          />
        </swiper-slide>
        <swiper-slide class="container">
          <img
            className="promo__slider__item PC"
            src={images["promoimgPC.png"]}
            alt="promo img"
          />
        </swiper-slide>
        <swiper-slide class="container">
          <img
            className="promo__slider__item PC"
            src={images["promoimgPC.png"]}
            alt="promo img"
          />
        </swiper-slide>
        {/* <img
            className="promo__slider__item MD"
            src={images["promoimgMD.png"]}
            alt="promo img"
          />
          <img
            className="promo__slider__item SM"
            src={images["promoimgSM.png"]}
            alt="promo img"
          /> */}
      </swiper-container>
      <img
        id="slider__button_next"
        className="slider__button"
        src={images["rightbuttonarrow.png"]}
        alt="next"
      />
    </section>
    /* <section className="container-horisontal section-promo">
          <img
            className="slider__button"
            src={images["leftbuttonarrow.png"]}
            alt="left"
          />
          <div className="container promo__slider">
            <img
              className="promo__slider__item PC"
              src={images["promoimgPC.png"]}
              alt="promo img"
            />
            <img
              className="promo__slider__item MD"
              src={images["promoimgMD.png"]}
              alt="promo img"
            />
            <img
              className="promo__slider__item SM"
              src={images["promoimgSM.png"]}
              alt="promo img"
            />
          </div>
          <ul className="slider__dots">
            <li className="slider__dots__item slider__dots__item_active"></li>
            <li className="slider__dots__item"></li>
            <li className="slider__dots__item"></li>
          </ul>
          <img
            className="slider__button"
            src={images["rightbuttonarrow.png"]}
            alt="right"
          />
        </section> */
  );
};

export default Promo;
