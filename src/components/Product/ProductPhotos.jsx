import Image from "components/base/Image";
import React from "react";
import { register } from "swiper/element";

const ProductPhotos = ({ items }) => {
  register();

  return (
    <div className="container-horisontal product-photos">
      <swiper-container
        class="container-horisontal slider product-photos__slider"
        loop="true"
        slides-per-view={1}
        thumbs-swiper=".product-photos__list"
      >
        {items &&
          items.map((item, index) => (
            <swiper-slide key={index}>
              <div className="container-horisontal slider__photo">
                <Image src={item} key={index} alt={"Image" + index} />
              </div>
            </swiper-slide>
          ))}
      </swiper-container>
      <swiper-container
        class="container-vertical product-photos__list"
        direction="vertical"
        loop={false}
        slides-per-view={5}
        watch-slides-progress={true}
      >
        {items &&
          items.map((item, index) => (
            <swiper-slide key={index}>
              <div className="container-horisontal list__photo">
                <Image src={item} key={index} alt={"Image" + index} />
              </div>
            </swiper-slide>
          ))}
      </swiper-container>
    </div>
  );
};

export default ProductPhotos;
