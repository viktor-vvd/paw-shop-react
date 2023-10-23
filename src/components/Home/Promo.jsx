import React, { useEffect, useRef } from "react";
import images from "@imports/ImagesImport";
import { register } from "swiper/element/bundle";
import Image from "components/base/Image";
import Svg from "components/base/Svg";

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
        <Svg
          name="leftButtonArrow"
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
        <Svg
          name="rightButtonArrow"
          loading="lazy"
          alt="right"
          width="59"
          height="59"
        />
      </div>
    </section>
  );
};

export default Promo;
