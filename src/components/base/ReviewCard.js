import React, { useEffect, useState } from "react";
import images from "imports/ImagesImport";

const ReviewCard = ({ item }) => {
  const [maxImages, setMaxImages] = useState(3);

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
      <span className="review-card__date">{item.date}</span>
      <div className="container-horisontal review-card__header">
        <span className="review-card__name">{item.name}</span>
        <div className="container-horisontal review-card__stars">
          {item.rate &&
            [...Array(item.rate)].map((e, i) => (
              <img
                className="review-card__stars__item"
                src={images["star.png"]}
                alt="star"
                key={"star" + i}
              />
            ))}
        </div>
      </div>
      {item.content && <span className="text_light">{item.content}</span>}
      {item.images && (
        <div className="container-horisontal review-card__photos">
          {item.images.map(
            (imageItem, index) =>
              index < maxImages && (
                <img
                  className="review-card__photos__item"
                  src={imageItem}
                  alt="review img"
                  key={"star" + index}
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
        <img
          className="review-card__link__icon"
          src={images["toprightpurplearrow.png"]}
          alt="arrow"
        />
      </a>
    </div>
  );
};

export default ReviewCard;
