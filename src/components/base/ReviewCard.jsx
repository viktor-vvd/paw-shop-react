import React, { useEffect, useState } from "react";
import images from "@imports/ImagesImport";
import Image from "./Image";

const ReviewCard = ({ item }) => {
  const [maxImages, setMaxImages] = useState(3);

  const convertDate = (dateToConvert) => {
    const temp = new Date(dateToConvert);
    const day = temp.getDate() < 10 ? "0" + temp.getDate() : temp.getDate();
    const month =
      temp.getMonth() < 9 ? "0" + (temp.getMonth() + 1) : temp.getMonth() + 1;
    return day + "." + month + "." + temp.getFullYear();
  };

  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth < 767 ? setMaxImages(2) : setMaxImages(3);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="container-vertical review-card">
      <span className="review-card__date">{convertDate(item.created_at)}</span>
      <div className="container-horisontal review-card__header">
        {item.name && <span className="review-card__name">{item.name}</span>}
        <div className="container-horisontal review-card__stars">
          {item.rating &&
            [...Array(Math.round(item.rating))].map((e, i) => (
              <Image
                className="review-card__stars__item"
                src={images["star"]}
                loading="lazy"
                alt="star"
                key={"star" + i}
                width="19"
                height="19"
              />
            ))}
        </div>
      </div>
      {item.body && <span className="text_light">{item.body}</span>}
      {item.images && (
        <div className="container-horisontal review-card__photos">
          {item.images.map(
            (imageItem, index) =>
              index < maxImages && (
                <Image
                  className="review-card__photos__item"
                  src={imageItem.conversions.thumb.url}
                  loading="lazy"
                  alt="review Image"
                  key={"picture" + index}
                  width="64"
                  height="66"
                />
              )
          )}
          {item.images.length > maxImages && (
            <div className="container-horisontal review-card__photos__item review-card__photos__more">
              <span className="text review-card__photos__more__text">
                +{item.images.length - maxImages}
              </span>
            </div>
          )}
        </div>
      )}
      <a
        className="container-horisontal text__button review-card__link"
        href="/"
      >
        See the product{" "}
        <Image
          className="review-card__link__icon"
          src={images["topRightPurpleArrow"]}
          loading="lazy"
          alt="arrow"
          width="10"
          height="10"
        />
      </a>
    </div>
  );
};

export default ReviewCard;
