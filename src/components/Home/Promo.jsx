import React, { useEffect, useRef } from "react";
import images from "imports/ImagesImport";
import { register } from "swiper/element/bundle";

const Promo = () => {
  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  register();

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      slidesPerView: 1,
      pagination: true,
      loop: true,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();

    prevRef.current?.addEventListener("click", () => {
      swiperContainer.swiper.slidePrev();
    });
    nextRef.current?.addEventListener("click", () => {
      swiperContainer.swiper.slideNext();
    });
  }, []);
  return (
    <section className="container-horisontal section-promo">
      <img
        className="slider__button"
        src={images["leftbuttonarrow.png"]}
        alt="previous"
        ref={prevRef}
      />
      {/*         <div className="container promo__slider"> */}
      <swiper-container
        class="container slider promo__slider"
        init="false"
        ref={swiperElRef}
      >
        {[...Array(3)].map((e, i) => (
          <swiper-slide class="container PC" key={"slide"+i}>
            <img
              className="promo__slider__item PC"
              src={images["promoimgPC.png"]}
              alt="promo img"
              key={"img"+i}
            />
          </swiper-slide>
        ))}
        {[...Array(3)].map((e, i) => (
          <swiper-slide class="container MD" key={"slide"+i}>
            <img
              className="promo__slider__item MD"
              src={images["promoimgMD.png"]}
              alt="promo img"
              key={"img"+i}
            />
          </swiper-slide>
        ))}
        {[...Array(3)].map((e, i) => (
          <swiper-slide class="container SM" key={"slide"+i}>
            <img
              className="promo__slider__item SM"
              src={images["promoimgSM.png"]}
              alt="promo img"
              key={"img"+i}
            />
          </swiper-slide>
        ))}
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
        className="slider__button"
        src={images["rightbuttonarrow.png"]}
        alt="next"
        ref={nextRef}
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
