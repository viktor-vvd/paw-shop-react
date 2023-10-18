import React, { useEffect, useRef } from "react";
import images from "@imports/ImagesImport";
import { register } from "swiper/element/bundle";
import Image from "components/base/Image";

const Promo = () => {
  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  register();

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      slidesPerView: 1,
      pagination:{
        dynamicBullets: true,
      },
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
      <div className="slider__button" ref={prevRef}>
        <Image
          src={images["leftButtonArrow"]}
          loading="lazy"
          alt="left"
          width="59"
          height="59"
        />
      </div>
      {/*         <div className="container promo__slider"> */}
      <swiper-container
        class="container slider promo__slider"
        init="false"
        ref={swiperElRef}
      >
        {[...Array(3)].map((e, i) => (
          <swiper-slide class="container PC" key={"slide" + i}>
            <Image
              className="promo__slider__item PC"
              src={images["promoimgPC"]}
              loading="lazy"
              alt="promo Image"
              key={"Image" + i}
              width="1168"
              height="425"
            />
          </swiper-slide>
        ))}
        {[...Array(3)].map((e, i) => (
          <swiper-slide class="container MD" key={"slide" + i}>
            <Image
              className="promo__slider__item MD"
              src={images["promoimgMD"]}
              loading="lazy"
              alt="promo Image"
              key={"Image" + i}
              width="768"
              height="272"
            />
          </swiper-slide>
        ))}
        {[...Array(3)].map((e, i) => (
          <swiper-slide class="container SM" key={"slide" + i}>
            <Image
              className="promo__slider__item SM"
              src={images["promoimgSM"]}
              loading="lazy"
              alt="promo Image"
              key={"Image" + i}
              width="360"
              height="304"
            />
          </swiper-slide>
        ))}
        {/* <Image
            className="promo__slider__item MD"
            src={images["promoImageMD"]}
            loading="lazy" alt="promo Image"
          />
          <Image
            className="promo__slider__item SM"
            src={images["promoImageSM"]}
            loading="lazy" alt="promo Image"
          /> */}
      </swiper-container>
      <div className="slider__button" ref={nextRef}>
        <Image
          src={images["rightButtonArrow"]}
          loading="lazy"
          alt="right"
          width="59"
          height="59"
        />
      </div>
    </section>
    /* <section className="container-horisontal section-promo">
          <Image
            className="slider__button"
            src={images["leftbuttonarrow"]}
            loading="lazy" alt="left"
          />
          <div className="container promo__slider">
            <Image
              className="promo__slider__item PC"
              src={images["promoImagePC"]}
              loading="lazy" alt="promo Image"
            />
            <Image
              className="promo__slider__item MD"
              src={images["promoImageMD"]}
              loading="lazy" alt="promo Image"
            />
            <Image
              className="promo__slider__item SM"
              src={images["promoImageSM"]}
              loading="lazy" alt="promo Image"
            />
          </div>
          <ul className="slider__dots">
            <li className="slider__dots__item slider__dots__item_active"></li>
            <li className="slider__dots__item"></li>
            <li className="slider__dots__item"></li>
          </ul>
          <Image
            className="slider__button"
            src={images["rightbuttonarrow"]}
            loading="lazy" alt="right"
          />
        </section> */
  );
};

export default Promo;
