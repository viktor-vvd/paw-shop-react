import React, { useEffect, useRef } from "react";
import images from "@imports/ImagesImport";
import ReviewCard from "@components/base/ReviewCard";
import { register } from "swiper/element/bundle";
import Image from "components/base/Image";

const Reviews = () => {
  const data = [
    {
      id: 0,
      date: "19.07.2022",
      name: "Alex",
      rate: 5,
      content:
        "Dog loved this thing even before I got it completely out of the box. Within 1 hr. cover was torn and inside exposed. Tossing, chewing and shaking went on for an hour straight. Removed it from her mouth and all goes back to good. Might have been a one off, but be watchful. Would buy again.",
      images: [
        images["comment1image1"],
        images["comment1image1"],
        images["comment1image3"],
        images["comment1image3"],
      ],
    },
    {
      id: 2,
      date: "15.07.2022",
      name: "Richard",
      rate: 5,
      content: `This is our dog's favorite toy. She plays with it indoors and outdoors. It is not very durable, because she is a chewer. She pulls the "threads" out one by one until she takes the cover off, then chews the foam football apart bite by bite. We let her play indoors with it until she starts leaving little white pieces of foam around house, then we leave it outdoors until she pulls the cover off and destroys the rest of it.`,
      images: null,
    },
    {
      id: 2,
      date: "19.07.2022",
      name: "Alex",
      rate: 5,
      content:
        "Our 6 month old German Shepherd puppy loves this dragon! It has quickly become a favorite in just a few days. The dragon's wings make a crinkle noise and it's belly squeaks. It's perfect for fetch and tug of war. He also loves to just carry it around, squeak and shake It. Will definitely buy more toys.",
      images: [images["comment3image1"], images["comment1image1"]],
    },
  ];

  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  register();

  useEffect(() => {
    const swiperContainer = swiperElRef.current;

    const params = {
      pagination: true,
      loop: true,
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
    <section className="container-vertical outer__container reviews">
      {/* <Image
        className="reviews__background PC"
        src={images["dogpurplebg"]}
        loading="lazy" alt="bg"
      />
      <Image
        className="reviews__background MD"
        src={images["dogpurplebgMD"]}
        loading="lazy" alt="bg"
      />
      <Image
        className="reviews__background SM"
        src={images["dogpurplebgSM"]}
        loading="lazy" alt="bg"
      /> */}
      <div className="container-vertical reviews__container">
        <div className="reviews__title__container">
          <span className="title reviews__title_dark">Reviews</span>
          <h2 className="title reviews__title">Reviews</h2>
        </div>
        <div className="container-horisontal reviews__slider__container">
          <div className="slider__button" ref={prevRef}>
            <Image
              src={images["leftButtonArrow"]}
              loading="lazy"
              alt="left"
              width="59"
              height="59"
            />
          </div>
          {/* <div className="container-horisontal container reviews__slider"> */}
          <swiper-container
            class="container-horisontal container slider reviews__slider"
            init="false"
            ref={swiperElRef}
          >
            {data &&
              data.map((item, index) => (
                <swiper-slide key={index}>
                  <ReviewCard item={item} key={index} />
                </swiper-slide>
              ))}
            {data &&
              data.map((item, index) => (
                <swiper-slide key={index}>
                  <ReviewCard item={item} key={index} />
                </swiper-slide>
              ))}
            {data &&
              data.map((item, index) => (
                <swiper-slide key={index}>
                  <ReviewCard item={item} key={index} />
                </swiper-slide>
              ))}
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
        </div>
      </div>
    </section>
  );
};

export default Reviews;
