import React, { useEffect, useRef } from "react";
import ReviewCard from "@components/base/ReviewCard";
import { register } from "swiper/element/bundle";
import {
  useCommentsRandomListGETQuery,
} from "api/commentsApi";
import Preloader from "components/base/Preloader";
import { LeftButtonArrow, RightButtonArrow } from "public/svgComponents";

const Reviews = () => {
  const { data, isFetching } = useCommentsRandomListGETQuery({ limit: 9 });

  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  register();

  useEffect(() => {
    /* const result = commentsGet({ limit: 9 }); */
    const swiperContainer = swiperElRef.current;

    const params = {
      pagination:{
        dynamicBullets: true,
      },
      loop: true,
      observer: true,
      observeSlideChildren: true,
      observeParents: true,
      breakpoints: {
        200: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: "17rem",
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: "32rem",
        },
        1000: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: "32rem",
        },
      },
    };
    if (data) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();

      prevRef.current?.addEventListener("click", () => {
        swiperContainer.swiper.slidePrev();
      });
      nextRef.current?.addEventListener("click", () => {
        swiperContainer.swiper.slideNext();
      });
    }
  }, [data]);

  return (
    <section className="container-vertical outer__container reviews">
      {isFetching && <Preloader className="preloader_absolute" />}
      <div className="container-vertical reviews__container">
        <div className="reviews__title__container">
          <span className="title reviews__title_dark">Reviews</span>
          <h2 className="title reviews__title">Reviews</h2>
        </div>
        <div className="container-horisontal reviews__slider__container">
          <div className="slider__button" ref={prevRef}>
            <LeftButtonArrow
              loading="lazy"
              alt="left"
              width="59"
              height="59"
            />
          </div>
          <swiper-container
            class="container-horisontal container slider reviews__slider"
            init="false"
            ref={swiperElRef}
          >
            {data?.data &&
              data.data.map((item, index) => (
                <swiper-slide key={index}>
                  <ReviewCard item={item} key={index} />
                </swiper-slide>
              ))}
          </swiper-container>
          <div className="slider__button" ref={nextRef}>
            <RightButtonArrow
              loading="lazy"
              alt="right"
              width="59"
              height="59"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
